import json
import pandas as pd
from fpdf import FPDF
from pathlib import Path
import os

# Get the current directory where your script is located
current_dir = os.path.dirname(os.path.abspath(__file__))
input_file = os.path.join(current_dir, "fixed-term-fixed-rate-repo-product.json")

def flatten_json(nested_json, prefix=''):
    """
    Flatten nested JSON structure into a flat dictionary
    """
    items = {}
    for key, value in nested_json.items():
        new_key = f"{prefix}.{key}" if prefix else key
        if isinstance(value, dict):
            items.update(flatten_json(value, new_key))
        elif isinstance(value, list):
            for i, item in enumerate(value):
                if isinstance(item, dict):
                    items.update(flatten_json(item, f"{new_key}[{i}]"))
                else:
                    items[f"{new_key}[{i}]"] = item
        else:
            items[new_key] = value
    return items

def export_to_excel(json_data, output_file):
    """
    Export flattened JSON data to Excel with split hierarchical columns
    """
    # Flatten the JSON structure
    flat_data = flatten_json(json_data)
    
    # Create a list to hold the split data
    split_data = []
    
    # Process each flattened key-value pair
    for key, value in flat_data.items():
        # Split the key into its components
        parts = []
        current_part = ""
        bracket_count = 0
        
        # Handle array indices and nested paths carefully
        for char in key:
            if char == '[':
                bracket_count += 1
                current_part += char
            elif char == ']':
                bracket_count -= 1
                current_part += char
            elif char == '.' and bracket_count == 0:
                if current_part:
                    parts.append(current_part)
                current_part = ""
            else:
                current_part += char
        
        if current_part:
            parts.append(current_part)
            
        # Create a row with the split parts and the value
        row_data = {f'Level_{i+1}': part for i, part in enumerate(parts)}
        row_data['Value'] = value
        split_data.append(row_data)
    
    # Convert to DataFrame
    df = pd.DataFrame(split_data)
    
    # Rename columns to be more meaningful
    # Get the maximum number of levels
    max_levels = len([col for col in df.columns if col.startswith('Level_')])
    
    # Create a list of default column names
    column_names = ['Path Element ' + str(i+1) for i in range(max_levels)]
    column_names.append('Value')
    
    # Rename the columns
    df.columns = column_names
    
    # Export to Excel
    df.to_excel(output_file, index=False)
    print(f"Excel file created: {output_file}")
    
def export_to_pdf(json_data, output_file):
    """
    Export JSON data to PDF with proper formatting
    """
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    
    # Add title
    pdf.set_font("Arial", 'B', 16)
    pdf.cell(200, 10, "JSON Data Export", ln=True, align='C')
    pdf.ln(10)
    
    # Reset font for content
    pdf.set_font("Arial", size=10)
    
    # Flatten and format the JSON data
    flat_data = flatten_json(json_data)
    
    # Calculate column widths
    key_width = 100
    value_width = 90
    
    # Add content
    for key, value in flat_data.items():
        # Handle long text by wrapping
        pdf.multi_cell(key_width, 5, str(key))
        current_y = pdf.get_y()
        pdf.set_xy(key_width + 10, current_y - 5)
        pdf.multi_cell(value_width, 5, str(value))
        pdf.ln(2)
    
    pdf.output(output_file)
    print(f"PDF file created: {output_file}")

def main():
    # Read JSON file
    with open(input_file, 'r') as f:
        json_data = json.load(f)
    
    # Create output directory if it doesn't exist
    output_dir = Path(current_dir) / "output"
    output_dir.mkdir(exist_ok=True)
    
    # Export to Excel
    excel_output = output_dir / "CDM_Security_Lending.xlsx"
    export_to_excel(json_data, excel_output)
    
    # Export to PDF
    pdf_output = output_dir / "CDM_Security_Lending.pdf"
    export_to_pdf(json_data, pdf_output)

if __name__ == "__main__":
    main()