Level 0,Level 1,Level 2,Field,Data Type,Data Description,Example Value,Menu Options
IndexCDS,Header,,section,,,,
,,,TradeType,text,Type of credit default swap trade,IndexCreditDefaultSwap,
,,,CounterParty,text,Unique identifier for the counterparty,001B456BCDEFGH67XY89,
,,,NettingSetId,text,Identifier for netting set,ABC1234,
,,,PartyId,text,Legal Entity Identifier for the party,549300A08LH2961IPN13,
,,,ValuationDate,date,Date of valuation,2018-02-19,
,CreditDetails,,section,,,,
,,,CreditCurveId,text,Reference identifier for credit curve,RED:2I65BZDM1,
,,,SettlesAccrual,boolean,Indicates if accrual is settled,TRUE,
,,,PaysAtDefaultTime,boolean,Indicates if payment occurs at default time,TRUE,
,,,ProtectionStart,date,Start date of protection,20160206,
,,,UpfrontDate,date,Date of upfront payment,20160208,
,,,UpfrontFee,decimal,Fee paid upfront,0.0,
,LegData,,section,,,,
,,,LegType,menu,Type of payment leg,Fixed,"{Fixed, Float}"
,,,Payer,boolean,Indicates if party is the payer,TRUE,
,,,Currency,text,Currency of the trade,USD,
,,,Notional,decimal,Notional amount of the trade,300000.000000,
,,,DayCounter,text,Day count convention,A360,
,,,PaymentConvention,text,Payment date convention,F,
,FixedLegData,,section,,,,
,,,Rate,decimal,Fixed rate for payments,0.01,
,ScheduleData,,section,,,,
,,,StartDate,date,Start date of payment schedule,20160205,
,,,EndDate,date,End date of payment schedule,20260205,
,,,Tenor,text,Payment frequency,3M,
,,,Calendar,text,Business day calendar,US,
,,,Convention,text,Business day convention,F,
,,,TermConvention,text,Terminal business day convention,F,
,,,Rule,text,Schedule generation rule,CDS2015,
,,,EndOfMonth,boolean,End of month adjustment flag,,
,,,FirstDate,date,First payment date,,
,,,LastDate,date,Last payment date,,
