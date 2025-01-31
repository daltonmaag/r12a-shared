var spreadsheet = `syrc-syr	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	shape	# value	native name	latin name	ucs name	block
ـ	_			_		J	Lm		baseline extension						U+0640 ARABIC TATWEEL	✓
-	-			-	-		Pd		hyphen						U+2010: HYPHEN	
‑	-			‑	‑		Pd	?	non-breaking hyphen						U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd	?	en dash						U+2013: EN DASH	
—	-			—	—		Pd	?	em dash						U+2014: EM DASH	
،	,			,		<	Po		comma						U+060C: ARABIC COMMA	✓
؛	;			;	;	>	Po		semi-colon						U+061B: ARABIC SEMICOLON	✓
܆	:			:		\	Po		colon						U+0706: SYRIAC COLON SKEWED LEFT	✓
܇	:			:		/	Po		colon						U+0707: SYRIAC COLON SKEWED RIGHT	✓
؟	?			?	?	?	Po		question mark						U+061F: ARABIC QUESTION MARK	✓
…	.			…	…	;	Po	?	ellipsis						U+2026: HORIZONTAL ELLIPSIS	
(	(			(	(		Ps		parenthesis						U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe	?	bracket						U+005B: LEFT SQUARE BRACKET	
)	)			)	)	0	Ps		parenthesis						U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe	?	bracket						U+005D: RIGHT SQUARE BRACKET	
݀	[			⁑	ʺ	K	Mn	i	feminine marker						U+0740: SYRIAC FEMININE DOT	✓
̇	[			‒͑			Mn	i	disambiguation mark						U+0307: COMBINING DOT ABOVE	✓
̣	[			‒̜			Mn	i	disambiguation mark						U+0323: COMBINING DOT BELOW	✓
̄	[			‒̄		U	Mn	i	phonological marker	west syriac					U+0304: COMBINING MACRON	✓
̠	[			‒̱		L	Mn	?	phonological marker	west syriac					U+0320: COMBINING MINUS SIGN BELOW	
̊	[			‒̊		2	Mn	r	hard/soft sound marker						U+030A: COMBINING RING ABOVE	✓
̥	[			‒̥		3	Mn	r	hard/soft sound marker						U+0325: COMBINING RING BELOW	✓
̤	[			‒̤			Mn	r	phonological marker						U+0324: COMBINING DIAERESIS BELOW	✓
ܑ	[			ˈ		H	Mn	u	aleph	east syriac only					U+0711: SYRIAC LETTER SUPERSCRIPT ALAPH	✓
݇	]			′			Mn	r	silent letter marker	east syriac				talqana	U+0747: SYRIAC OBLIQUE LINE ABOVE	✓
݈	]			‵		u	Mn	r	silent letter marker	east syriac				talqana	U+0748: SYRIAC OBLIQUE LINE BELOW	✓
݁	/			˙		P	Mn	i	hard-sound marker				ܩܘܫܝܐ	qūššāyā	U+0741: SYRIAC QUSHSHAYA	✓
݂	/			ˑ		:	Mn	i	soft sound marker					rukkāḵā	U+0742: SYRIAC RUKKAKHA	✓
̃	/			~		[	Mn	?	repertoire extension					maǧliyana	U+0303: COMBINING TILDE	✓
̰	/			˷		"	Mn	?	repertoire extension					maǧliyana	U+0330: COMBINING TILDE BELOW	✓
̮	/			ˇ		±	Mn	i	fricative indicator						U+032E: COMBINING BREVE BELOW	✓
̈	&			˖	\u030B	I	Mn	i	plural marker					syame	U+0308: COMBINING DIAERESIS	✓
\u070F	+			¨		§	Cf		abbreviation mark						U+070F SYRIAC ABBREVIATION MARK	
«	<			«	“	-	Pi	?	quotation mark						U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	<			‹			Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	“		Pi	?	quotation mark						U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			\‘	\‘		Pi	?	quotation mark						U+2018: LEFT SINGLE QUOTATION MARK	
\u200B	=			␣			Cf	?	zero-width space						U+200B: ZERO WIDTH SPACE	
\u200C	=			ᶻʷⁿʲ			Cf		zero-width non-joiner						U+200C: ZERO WIDTH NON-JOINER	
\u200D	=			ᶻʷʲ			Cf		zero-width joiner						U+200D: ZERO WIDTH JOINER	
\u034F	=			ᶜᵍʲ			Mn	?	combining grapheme joiner						U+034F: COMBINING GRAPHEME JOINER	
\u2060	=			ʷʲ			Cf	?	word joiner						U+2060 WORD JOINER	
\u2067	=			ʳˡⁱ			Cf		rtl isolate						U+2067: RIGHT-TO-LEFT ISOLATE	
\u2066	=			ˡʳⁱ			Cf		ltr isolate						U+2066: LEFT-TO-RIGHT ISOLATE	
\u2068	=			ᶠˢⁱ			Cf		first-strong isolate						U+2068: FIRST STRONG ISOLATE	
\u2069	=			ᵖᵈⁱ			Cf		pop direction isolate						U+2069: POP DIRECTIONAL ISOLATE	
\u202B	=			ʳˡᵉ			Cf		rtl embed						U+202B: RIGHT-TO-LEFT EMBEDDING	
\u202A	=			ˡʳᵉ			Cf		ltr embed						U+202A: LEFT-TO-RIGHT EMBEDDING	
\u202C	=			ᵖᵈᶠ			Cf		pop direction						U+202C: POP DIRECTIONAL FORMATTING	
\u200F	=			ʳˡᵐ			Cf		rtl mark						U+200F: RIGHT-TO-LEFT MARK	
\u200E	=			ˡʳᵐ			Cf		ltr mark						U+200E: LEFT-TO-RIGHT MARK	
\u061C	=			ᵃˡᵐ			Cf		arabic letter mark						U+061C: ARABIC LETTER MARK	
»	>			»	”	8	Pf	?	quotation mark						U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
›	>			›			Pf	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
”	>			”	”		Pf	?	quotation mark						U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			\’	\’		Pf	?	quotation mark						U+2019: RIGHT SINGLE QUOTATION MARK	
܀	|			¶		,	Po		end of paragraph						U+0700: SYRIAC END OF PARAGRAPH	✓
																
ܦ	p	p f		p	p p̄	p	Lo		consonant		ܦ ܦـܦـܦ	80	ܦܐ	pē	U+0726: SYRIAC LETTER PE	✓
ܧ	p	p		ṗ	p	o	Lo	u	consonant	CPA	ܧ ܧܧܧ				U+0727: SYRIAC LETTER REVERSED PE	✓
ܒ	b	b v		b	b ḇ	b	Lo		consonant		ܒ ܒـܒـܒ	2	ܒܝܬ	bēṯ	U+0712: SYRIAC LETTER BETH	✓
ܬ	t	t θ		t	t ṯ	t	Lo		consonant		ܬ ـܬ	400	ܬܘ	taw	U+072C: SYRIAC LETTER TAW	✓
ܛ	t	tˤ		ᵵ	ṭ	u	Lo		consonant		ܛ ܛـܛـܛ	9	ܛܝܬ	ṭēṯ	U+071B: SYRIAC LETTER TETH	✓
ܟ̃	t	t͡ʃ		k~	č										U+071F U+0303: SYRIAC LETTER KAPH, COMBINING TILDE	
ܕ	d	d ð		d	d ḏ	d	Lo		consonant		ܕ ـܕ	4	ܕܠܬ	dālaṯ	U+0715: SYRIAC LETTER DALATH	✓
ܖ	d	d r		ḋ	d ḏ	e	Lo	a	alternative consonant		ܖ ـܖ			dālaṯ rish	U+0716: SYRIAC LETTER DOTLESS DALATH RISH	✓
ܓ̰	d	d͡ʒ		g˷	ǧ										U+0713 U+0330: SYRIAC LETTER GAMAL, COMBINING TILDE BELOW	
ܟ	k	k x		k	k ḵ č	k	Lo		consonant		ܟ ܟـܟـܟ	20	ܟܦ	kāp̄	U+071F: SYRIAC LETTER KAPH	✓
ܓ	g	ɡ ɣ		g	g ḡ	g	Lo		consonant		ܓ ܓـܓـܓ	3	ܓܡܠ	gāmal	U+0713: SYRIAC LETTER GAMAL	✓
ܩ	q	q		q	q	q	Lo		consonant		ܩ ܩـܩـܩ	100	ܩܘܦ	qōp̄	U+0729: SYRIAC LETTER QAPH	✓
ܐ	}	ʔ ∅ ɑ		ʾ	ʾ ȃ	a	Lo		consonant/mater lectionis		ܐ ـܐ ܕܐ	1	ܐܠܦ	ʾālap̄	U+0710: SYRIAC LETTER ALAPH	✓
ܦ݂	f	f		pˑ	p̄										U+0726 U+0742: SYRIAC LETTER PE, SYRIAC RUKKAKHA	
ܒ݂	v	v w		bˑ	ḇ										U+0712 U+0742: SYRIAC LETTER BETH, SYRIAC RUKKAKHA	
ܬ݂	q	θ		tˑ	ṯ										U+072C U+0742: SYRIAC LETTER TAW, SYRIAC RUKKAKHA	
ܕ݂	d	ð		dˑ	ḏ										U+0715 U+0742: SYRIAC LETTER DALATH, SYRIAC RUKKAKHA	
ܣ	s	s		s	s	s	Lo		consonant		ܣ ܣـܣـܣ	60	ܣܡܟܬ	semkaṯ	U+0723: SYRIAC LETTER SEMKATH	✓
ܤ	s	s		ṡ	s	c	Lo		final consonant						U+0724: SYRIAC LETTER FINAL SEMKATH	✓
ܨ	s	sˤ		ᵴ	ṣ	x	Lo		consonant		ܨ ـܨ	90	ܨܕܐ	ṣāḏē	U+0728: SYRIAC LETTER SADHE	✓
ܫ	s	ʃ		ʃ	š	v	Lo		consonant		ܫ ܫـܫـܫ	300	ܫܝܢ	šīn	U+072B: SYRIAC LETTER SHIN	✓
ܙ	z	z		z	z	z	Lo		consonant		ܙ ـܙ	7	ܙܝܢ	zayn	U+0719: SYRIAC LETTER ZAIN	✓
ܙ̃	z	ʒ		z~	ž										U+0719 U+0303: SYRIAC LETTER ZAIN, COMBINING TILDE	
ܙ̰	z	ʒ		z˷	ž										U+0719 U+0330: SYRIAC LETTER ZAIN, COMBINING TILDE BELOW	
ܫ̰	z	ʒ		ʃ˷	ẑ										U+072B U+0330: SYRIAC LETTER SHIN, COMBINING TILDE BELOW	
ܫ̃	z	ʒ		ʃ~	ẑ										U+072B U+0303: SYRIAC LETTER SHIN, COMBINING TILDE	
ܟ݂	x	x t͡ʃ		kˑ	ḵ										U+071F U+0742: SYRIAC LETTER KAPH, SYRIAC RUKKAKHA	
ܓ݂	y	ɣ		gˑ	ḡ										U+0713 U+0742: SYRIAC LETTER GAMAL, SYRIAC RUKKAKHA	
ܚ	h	ħ		ħ	ḥ	;	Lo		consonant		ܚ ܚـܚـܚ	8	ܚܝܬ	ḥēṯ	U+071A: SYRIAC LETTER HETH	✓
ܥ	{	ʕ		ʿ	ʿ	i	Lo		consonant		ܥ ܥـܥـܥ	70	ܥܐ	ʿē	U+0725: SYRIAC LETTER E	✓
ܗ	h	h		h	h	h	Lo		consonant		ܗ ـܗ	5	ܗܐ	hē	U+0717: SYRIAC LETTER HE	✓
ܡ	m	m		m	m	m	Lo		consonant		ܡ ܡـܡـܡ	40	ܡܝܡ	mīm	U+0721: SYRIAC LETTER MIM	✓
ܢ	n	n		n	n	n	Lo		consonant		ܢ ܢـܢـܢ	50	ܢܘܢ	nūn	U+0722: SYRIAC LETTER NUN	✓
ܘ	w	w u o aw		w	w û ô	w	Lo		consonant		ܘ ـܘ	6	ܘܘ	waw	U+0718: SYRIAC LETTER WAW	✓
ܪ	r	r		r	r	r	Lo		consonant		ܪ ـܪ	200	ܪܝܫ	rēš	U+072A: SYRIAC LETTER RISH	✓
ܠ	l	l		l	l	l	Lo		consonant		ܠ ܠـܠـܠ	30	ܠܡܕ	lāmaḏ	U+0720: SYRIAC LETTER LAMADH	✓
ܝ	y	j i e aj		y	y î	y	Lo		consonant/mater lectionis		ܝ ܝـܝـܝ	10	ܝܘܕ	yōḏ	U+071D: SYRIAC LETTER YUDH	✓
ܞ	j	–		jʰ	jh		Lo	i	ligature		ܞ ـܞ				U+071E: SYRIAC LETTER YUDH HE	✓
																
ܝܼ	i	i		yi	ī (i)				vowel				ܚܒ݂ܵܨܵܐ‎	ḥḇāṣā	U+071D U+073C: SYRIAC LETTER YUDH, SYRIAC HBASA-ESASA DOTTED	
\u0738\u0710\b	i	ɪ		eʾ	ȋ										U+0738 U+0710: SYRIAC DOTTED ZLAMA HORIZONTAL, SYRIAC LETTER ALAPH	
ܘܿ	o	u		wo	ō (o)				vowel				ܥܨܵܨܵܐ ܪܘܝܼܚܵܐ‎/ܪܘܵܚܵܐ‎	ʿṣāṣā rwīḥā / rwāḥā	U+0718 U+073F: SYRIAC LETTER WAW, SYRIAC RWAHA	
ܘܼ	u	u		wi	ū (u)				vowel				ܥܨܵܨܵܐ ܐܲܠܝܼܨܵܐ‎/ܪܒ݂ܵܨܵܐ‎	ṣāṣā ʾălīṣā / rḇāṣā	U+0718 U+073C: SYRIAC LETTER WAW, SYRIAC HBASA-ESASA DOTTED	
ܹܝ	e	e		ēy	ē (ê)				vowel				ܐܲܣܵܩܵܐ‎	ʾăsāqā	U+0739 U+071D: SYRIAC DOTTED ZLAMA ANGULAR, SYRIAC LETTER YUDH	
\u0735\u0710\b	a	a		āʾ	â										U+0735 U+0710: SYRIAC ZQAPHA DOTTED, SYRIAC LETTER ALAPH	
\u0732\u0710\b	a	a		aʾ	ȃ										U+0732 U+0710: SYRIAC PTHAHA DOTTED, SYRIAC LETTER ALAPH	
																
ܿ	o	o		o	o	B	Mn	u	vowel diacritic	east syriac			ܥܨܵܨܵܐ ܪܘܝܼܚܵܐ‎ / ܪܘܵܚܵܐ‎	ʿṣāṣā rwīḥā / rwāḥā	U+073F: SYRIAC RWAHA	✓
ّ	o	o		ȯ	ȯ		Mn	u	vowel diacritic	west syriac					U+0651: ARABIC SHADDA	
ܼ	i	i u		i	i	V	Mn	u	vowel diacritic	east syriac				ḥbāṣā	U+073C: SYRIAC HBASA-ESASA DOTTED	✓
ܺ	i	i		ï	ï	R	Mn	u	vowel diacritic	west syriac			ܚܒ݂ܵܨܵܐ‎	ḥḇāṣā	U+073A: SYRIAC HBASA ABOVE	✓
ܻ	i	i		ị	ị	F	Mn	u	vowel diacritic	west syriac			ܚܒ݂ܵܨܵܐ‎	ḥḇāṣā	U+073B: SYRIAC HBASA BELOW	✓
ܽ	u	u		ů	ů	T	Mn	u	vowel diacritic	west syriac			ܥܨܳܨܳܐ‎	ṣāṣā	U+073D: SYRIAC ESASA ABOVE	✓
ܾ	u	u		ụ	ụ	G	Mn	u	vowel diacritic	west syriac			ܥܨܳܨܳܐ‎	ṣāṣā	U+073E: SYRIAC ESASA BELOW	✓
ܸ	e	ɛ ɪ e		e	e (ĕ i)	Y	Mn	u	vowel diacritic	east syriac			ܪܒ݂ܵܨܵܐ ܐܲܪܝܼܟ݂ܵܐ‎/ܙܠܵܡܵܐ ܦܫܝܼܩܵܐ‎	rḇāṣā ʾărīḵā / zlāmā pšīqā	U+0738: SYRIAC DOTTED ZLAMA HORIZONTAL	✓
ܹ	e	e		ē	ē	N	Mn	u	vowel diacritic	east syriac			ܪܒ݂ܵܨܵܐ ܟܲܪܝܵܐ‎/ܙܠܵܡܵܐ ܩܲܫܝܵܐ‎	rḇāṣā karyā / zlāmā qašyā	U+0739: SYRIAC DOTTED ZLAMA ANGULAR	✓
ܶ	e	ɛ e		ė	ė	E	Mn	u	vowel diacritic	west syriac			ܪܒ݂ܵܨܵܐ	rḇāṣā	U+0736: SYRIAC RBASA ABOVE	✓
ܷ	e	ɛ e		ẹ	ẹ	D	Mn	u	vowel diacritic	west syriac			ܪܒ݂ܵܨܵܐ	rḇāṣā	U+0737: SYRIAC RBASA BELOW	✓
ܲ	a	a		a	a (ă)	Z	Mn	u	vowel diacritic	east syriac			ܦܬ݂ܳܚܳܐ‎	pṯāḥā	U+0732: SYRIAC PTHAHA DOTTED	✓
ܵ	a	ɑ		ā	ā (â å)	X	Mn	u	vowel diacritic	east syriac			ܙܩܵܦ݂ܵܐ‎	zqāp̄ā	U+0735: SYRIAC ZQAPHA DOTTED	✓
ܰ	a	a		ȧ	ȧ	Q	Mn	u	vowel diacritic	west syriac			ܦܬ݂ܳܚܳܐ‎	pṯāḥā	U+0730: SYRIAC PTHAHA ABOVE	✓
ܱ	a	a		ạ	ạ	A	Mn	u	vowel diacritic	west syriac			ܦܬ݂ܳܚܳܐ‎	pṯāḥā	U+0731: SYRIAC PTHAHA BELOW	✓
ܳ	a	ɑ		å	å	W	Mn	u	vowel diacritic	west syriac			ܙܩܵܦ݂ܵܐ‎	zqāp̄ā	U+0733: SYRIAC ZQAPHA ABOVE	✓
ܴ	a	ɑ		ḁ	ḁ	S	Mn	u	vowel diacritic	west syriac			ܙܩܵܦ݂ܵܐ‎	zqāp̄ā	U+0734: SYRIAC ZQAPHA BELOW	✓
																
ܔ				–		f	Lo	u	garshuni letter						U+0714: SYRIAC LETTER GAMAL GARSHUNI	✓
ܜ				–		j	Lo	u	garshuni letter						U+071C: SYRIAC LETTER TETH GARSHUNI	✓
ً				–		w	Mn	u	arabic diacritic						U+064B: ARABIC FATHATAN	
ٌ				–		r	Mn	u	arabic diacritic						U+064C: ARABIC DAMMATAN	
ٍ				–		s	Mn	u	arabic diacritic						U+064D: ARABIC KASRATAN	
َ				–		q	Mn	u	arabic diacritic						U+064E: ARABIC FATHA	
ُ				–		e	Mn	u	arabic diacritic						U+064F: ARABIC DAMMA	
ِ				–		a	Mn	u	arabic diacritic						U+0650: ARABIC KASRA	
ّ				–			Mn	u	arabic diacritic						U+0651: ARABIC SHADDA	
ْ				–			Mn	u	arabic diacritic						U+0652: ARABIC SUKUN	
ٰ				–		h	Mn	u	arabic diacritic						U+0670: ARABIC LETTER SUPERSCRIPT ALEF	
ٕ				–		g	Mn	u	arabic diacritic						U+0655: ARABIC HAMZA BELOW	
ٔ				–		y	Mn	u	arabic diacritic						U+0654: ARABIC HAMZA ABOVE	
ٓ				–		t	Mn	u	arabic diacritic						U+0653: ARABIC MADDAH ABOVE	
ء				–		f	Lo	u							U+0621 ARABIC LETTER HAMZA	
																
ܭ		v		–			Lo	u	consonant		ܭ ܭܭܭ				U+072D: SYRIAC LETTER PERSIAN BHETH	✓
ܮ		ɣ		–			Lo	u	consonant		ܮ ܮܮܮ				U+072E: SYRIAC LETTER PERSIAN GHAMAL	✓
ܯ		ð		–			Lo	u	consonant		ܯ ـܯ				U+072F: SYRIAC LETTER PERSIAN DHALATH	✓
																
ݍ		ʒ		–			Lo	u	consonant						U+074D: SYRIAC LETTER SOGDIAN ZHAIN	✓
ݎ		x		–			Lo	u	consonant						U+074E: SYRIAC LETTER SOGDIAN KHAPH	✓
ݏ		f		–			Lo	u	consonant						U+074F: SYRIAC LETTER SOGDIAN FE	✓
																
̭				‒̭		p	Mn	i							U+032D COMBINING CIRCUMFLEX ACCENT BELOW	✓
݃				‒݃			Mn	r	accent mark						U+0743: SYRIAC TWO VERTICAL DOTS ABOVE	✓
݄				‒݄			Mn	r	accent mark						U+0744: SYRIAC TWO VERTICAL DOTS BELOW	✓
݅				‒̂		o	Mn	u	diacritic						U+0745: SYRIAC THREE DOTS ABOVE	✓
݆				‒̬		l	Mn	u	diacritic						U+0746: SYRIAC THREE DOTS BELOW	✓
݉				–		4	Mn	r	music mark						U+0749: SYRIAC MUSIC	✓
݊				–		]	Mn	r	diacritic cross						U+074A: SYRIAC BARREKH	✓
̱				–			Mn	r	diacritic						U+0331: COMBINING MACRON BELOW	✓
																
܁				.		M	Po		full stop						U+0701: SYRIAC SUPRALINEAR FULL STOP	✓
܂				.		@	Po		full stop						U+0702: SYRIAC SUBLINEAR FULL STOP	✓
܃				:		#	Po		colon						U+0703: SYRIAC SUPRALINEAR COLON	✓
܄				:		$	Po		colon						U+0704: SYRIAC SUBLINEAR COLON	✓
܅				:		%	Po		colon						U+0705: SYRIAC HORIZONTAL COLON	✓
܈				;		^	Po		phrase division						U+0708: SYRIAC SUPRALINEAR COLON SKEWED LEFT	✓
܉				?		&	Po		question mark						U+0709: SYRIAC SUBLINEAR COLON SKEWED RIGHT	✓
																
܊				.	.	7	Po		contraction mark						U+070A: SYRIAC CONTRACTION	✓
܋				–		*	Po	r	note marker						U+070B: SYRIAC HARKLEAN OBELUS	✓
܌				–		9	Po	r	note marker						U+070C: SYRIAC HARKLEAN METOBELUS	✓
܍				–		_	Po	r	note marker						U+070D: SYRIAC HARKLEAN ASTERISCUS	✓
																
.				.			Po		full stop						U+002E: FULL STOP	
																
♱				–		6	So		symbol						U+2671: EAST SYRIAC CROSS	
♰				–		5	So		symbol						U+2670: WEST SYRIAC CROSS	
																
ʼ				ʼ	ʼ		Lm	?	apostrophe						U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po	?	section sign						U+00A7: SECTION SIGN	
†				†	†		Po	?	dagger						U+2020: DAGGER	
‡				‡	‡		Po	?	double dagger						U+2021: DOUBLE DAGGER	
′				′	′		Po	?	prime						U+2032: PRIME	
″				″	″		Po	?	double prime						U+2033: DOUBLE PRIME	
`																
																
latinPanel = 'ɑ ȃ ă ā â å ḇ č ð ḏ d͡ʒ ɛ ĕ ē ɡ ḡ ǧ ħ ḥ î ɪ ī jʰ ḵ ∅ ô ō p̄ θ sˤ ṣ ʃ š tˤ ṭ ṯ t͡ʃ û ū ɣ ʒ ʕ ʔ ʾ'																
																
var cols = {																
key: 1,																
ipaLoc: 2,																
ipaPlus: 3,																
transLoc: 4,																
transcription: 5,																
kbd: 6,																
class: 7,																
status: 8,																
typeLoc: 9,																
statusLoc: 10,																
																
shape: 11,																
numLoc: 12,																
																
nnameLoc: 13,																
nameLoc: 14,																
ucsName: 15,																
block: 16,																
																
othertranscriptions: [[5, 'Latin']]																
}																