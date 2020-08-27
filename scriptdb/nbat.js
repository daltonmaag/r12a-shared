var spreadsheet = `
𐢁		a	ʾ	ʔ	ʔ	consonant			ʾālap̄/ʾalif		U+10881: NABATAEAN LETTER ALEPH	
𐢀		A	ʾ	ʔ̽		consonant	final				U+10880: NABATAEAN LETTER FINAL ALEPH	
												
𐢘		p	p	p	p	consonant			pe/fa		U+10898: NABATAEAN LETTER PE	
𐢃		b	b	b	b	consonant			beth/ba		U+10883: NABATAEAN LETTER BETH	
𐢂		B	b	b̽		consonant	final				U+10882: NABATAEAN LETTER FINAL BETH	
𐢞		t	t	t	tˤ	consonant			taw/ta		U+1089E: NABATAEAN LETTER TAW	
𐢅		d	d	d	d	consonant			daleth/dal		U+10885: NABATAEAN LETTER DALETH	
𐢋		T	ṭ	tˤ	tˤ	consonant			teth		U+1088B: NABATAEAN LETTER TETH	
𐢏		k	k	k	k	consonant			kaph		U+1088F: NABATAEAN LETTER KAPH	
𐢎		K	k	k̽		consonant	final				U+1088E: NABATAEAN LETTER FINAL KAPH	
𐢄		g	g	g	g	consonant			gamal/jin		U+10884: NABATAEAN LETTER GIMEL	
𐢚		q	q	q	q	consonant			qoph		U+1089A: NABATAEAN LETTER QOPH	
												
𐢖		s	s	s	s	consonant			simkath		U+10896: NABATAEAN LETTER SAMEKH	
𐢉		z	z	z	z	consonant			zain		U+10889: NABATAEAN LETTER ZAYIN	
𐢙		S	ṣ	sˤ	sˤ	consonant			ṣāḏē/ṣad		U+10899: NABATAEAN LETTER SADHE	
𐢝		s	š	ʃ	ʃ	consonant			šin/sin		U+1089D: NABATAEAN LETTER SHIN	
𐢜		S	š	ʃ̽		consonant	final				U+1089C: NABATAEAN LETTER FINAL SHIN	
𐢊		H	ḥ	ħ	ħ	consonant			ha/heth		U+1088A: NABATAEAN LETTER HETH	
𐢗		{	ʿ	ʕ	ʕ	consonant			e/ain		U+10897: NABATAEAN LETTER AYIN	
𐢇		h	h	h	h	consonant			heh		U+10887: NABATAEAN LETTER HE	
𐢆		H	h	h̽		consonant	final				U+10886: NABATAEAN LETTER FINAL HE	
												
𐢓		m	m	m	m	consonant			mim		U+10893: NABATAEAN LETTER MEM	
𐢒		M	m	m̽		consonant	final				U+10892: NABATAEAN LETTER FINAL MEM	
𐢕		n	n	n	n	consonant			nun		U+10895: NABATAEAN LETTER NUN	
𐢔		N	n	n̽		consonant	final				U+10894: NABATAEAN LETTER FINAL NUN	
												
𐢈		w	w	w	w	consonant			waw		U+10888: NABATAEAN LETTER WAW	
𐢛		r	r	r	r	consonant			resh/ra		U+1089B: NABATAEAN LETTER RESH	
𐢑		l	l	l	l	consonant			lamadh/lam		U+10891: NABATAEAN LETTER LAMEDH	
𐢐		L	l	l̽		consonant	final				U+10890: NABATAEAN LETTER FINAL LAMEDH	
𐢍		y	y	y	j	consonant			yodh/ya		U+1088D: NABATAEAN LETTER YODH	
𐢌		Y	y	y̽		consonant	final				U+1088C: NABATAEAN LETTER FINAL YODH	
												
												
𐢧			1	1		number					U+108A7: NABATAEAN NUMBER ONE	
𐢨			2	2		number					U+108A8: NABATAEAN NUMBER TWO	
𐢩			3	3		number					U+108A9: NABATAEAN NUMBER THREE	
𐢪			4	4		number					U+108AA: NABATAEAN NUMBER FOUR	
𐢫			4	4̇		number					U+108AB: NABATAEAN CRUCIFORM NUMBER FOUR	
𐢬			5	5		number					U+108AC: NABATAEAN NUMBER FIVE	
𐢭			10	1⁰		number					U+108AD: NABATAEAN NUMBER TEN	
𐢮			20	2⁰		number					U+108AE: NABATAEAN NUMBER TWENTY	
𐢯			100	1₀		number					U+108AF: NABATAEAN NUMBER ONE HUNDRED	
												
												
												
												
												
												
												
												
												
\u200C		=		ₓ						zwnj	U+200C: ZERO WIDTH NON-JOINER	punctuation
\u200D		=		₊						zwj	U+200D: ZERO WIDTH JOINER	punctuation
\u200E		=		ˡʳᵐ						lrm	U+200E: LEFT-TO-RIGHT MARK	punctuation
\u200F		=		ʳˡᵐ						rlm	U+200F: RIGHT-TO-LEFT MARK	punctuation
\u061C		=		ᵃˡᵐ						alm	U+061C: ARABIC LETTER MARK	punctuation
\u2067		=		ʳˡⁱ						rli	U+2067: RIGHT-TO-LEFT ISOLATE	punctuation
\u2066		=		ˡʳⁱ						lri	U+2066: LEFT-TO-RIGHT ISOLATE	punctuation
\u202B		=		ʳˡᵉ						rle	U+202B: RIGHT-TO-LEFT EMBEDDING	punctuation
\u202A		=		ˡʳᵉ						lre	U+202A: LEFT-TO-RIGHT EMBEDDING	punctuation
\u2069		=		ᵖᵈⁱ						pdi	U+2069: POP DIRECTIONAL ISOLATE	punctuation
\u202C		=		ᵖᵈᶠ						pdf	U+202C: POP DIRECTIONAL FORMATTING	punctuation



`




var cols = {
"class": 1,
"key":2,
"transcription":3,
"transLoc": 4,
"ipaLoc": 5,
"transckey": 0,
"typeLoc": 6,
"statusLoc": 7,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,
"nameLoc": 9,
"nnameLoc": 0,
"ucsName": 11,
"block": 12,

"othertranscriptions": [[3, 'Latin']]
}
