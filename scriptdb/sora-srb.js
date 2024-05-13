var spreadsheet = `sora-srb	key	ipa	ipa+	translit	transc	kbd	class	status	type	usage	native name	name transcription	ucs name	block	0	
\u0020	 						Zs		space				U+0020: SPACE			
																
𑃛	p	p	ə	p			Lo		consonant				U+110DB: SORA SOMPENG LETTER PAH			
𑃒	b	b	ə	b			Lo		consonant				U+110D2: SORA SOMPENG LETTER BAH			
𑃑	t	t	ə	t			Lo		consonant				U+110D1: SORA SOMPENG LETTER TAH			
𑃓	t	t͡ʃ	ə	ʧ			Lo		consonant				U+110D3: SORA SOMPENG LETTER CAH			
𑃠	d	d͡ʒ	ə	ʣ			Lo		consonant				U+110E0: SORA SOMPENG LETTER JAH			
𑃔	d	ɖ	ə	ɖ			Lo		consonant				U+110D4: SORA SOMPENG LETTER DAH			
𑃟	k	k	ə	k			Lo		consonant				U+110DF: SORA SOMPENG LETTER KAH			
𑃕	g	ɡ	ə	ɡ			Lo		consonant				U+110D5: SORA SOMPENG LETTER GAH			
𑃐	s	s	ə	s			Lo		consonant				U+110D0: SORA SOMPENG LETTER SAH			
𑃞	h	h	ə	h			Lo		consonant				U+110DE: SORA SOMPENG LETTER HAH			
𑃖	m	m	ə	m			Lo		consonant				U+110D6: SORA SOMPENG LETTER MAH			
𑃙	n	n	ə	n			Lo		consonant				U+110D9: SORA SOMPENG LETTER NAH			
𑃡	n	ɲ	ə	ɲ			Lo		consonant				U+110E1: SORA SOMPENG LETTER NYAH			
𑃗	n	ŋ	ə	ŋ			Lo		consonant				U+110D7: SORA SOMPENG LETTER NGAH			
𑃚	w	w	ə	w			Lo		consonant				U+110DA: SORA SOMPENG LETTER VAH			
𑃝	r	r	ə	r			Lo		consonant				U+110DD: SORA SOMPENG LETTER RAH			
𑃘	l	l	ə	l			Lo		consonant				U+110D8: SORA SOMPENG LETTER LAH			
𑃜	y	j	ə	j			Lo		consonant				U+110DC: SORA SOMPENG LETTER YAH			
																
𑃤	i	i ɨ		i			Lo		vowel				U+110E4: SORA SOMPENG LETTER IH			
𑃥	u	u		u			Lo		vowel				U+110E5: SORA SOMPENG LETTER UH			
𑃣	e	e		e			Lo		vowel				U+110E3: SORA SOMPENG LETTER EEH			
𑃦	o	o a		o			Lo		vowel				U+110E6: SORA SOMPENG LETTER OH			
𑃢	a	aː		aː			Lo		vowel				U+110E2: SORA SOMPENG LETTER AH			
																
𑃧	a	ai		ai			Lo		diphthong				U+110E7: SORA SOMPENG LETTER EH			
𑃨	a	mae		mae			Lo		logograph				U+110E8: SORA SOMPENG LETTER MAE			
																
𑃰	±			0̣	0		Nd		digit				U+110F0: SORA SOMPENG DIGIT ZERO			
𑃱	±			1̣	1		Nd		digit				U+110F1: SORA SOMPENG DIGIT ONE			
𑃲	±			2̣	2		Nd		digit				U+110F2: SORA SOMPENG DIGIT TWO			
𑃳	±			3̣	3		Nd		digit				U+110F3: SORA SOMPENG DIGIT THREE			
𑃴	±			4̣	4		Nd		digit				U+110F4: SORA SOMPENG DIGIT FOUR			
𑃵	±			5̣	5		Nd		digit				U+110F5: SORA SOMPENG DIGIT FIVE			
𑃶	±			6̣	6		Nd		digit				U+110F6: SORA SOMPENG DIGIT SIX			
𑃷	±			7̣	7		Nd		digit				U+110F7: SORA SOMPENG DIGIT SEVEN			
𑃸	±			8̣	8		Nd		digit				U+110F8: SORA SOMPENG DIGIT EIGHT			
𑃹	±			9̣	9		Nd		digit				U+110F9: SORA SOMPENG DIGIT NINE			
																
,	,			,	,		Po		comma				U+002C: COMMA			
;	;			;	;	;;⁏⸵	Po		semicolon				U+003B: SEMICOLON			
!	!			!	!		Po		exclamation mark				U+0021: EXCLAMATION MARK			
.	.			.	.		Po		full stop				U+002E: FULL STOP			
(	(			(	(		Ps		parenthesis				U+0028: LEFT PARENTHESIS			
)	)			)	)		Ps		parenthesis				U+0029: RIGHT PARENTHESIS			
`																
																
latinPanel = 'aː t͡ʃ d͡ʒ ɖ ɲ ŋ'																
																
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
																
dvowel: 0,																
ivowel: 0,																
onset:0,																
final:0,																
subj:0,																
ltone:0,																
htone:0,																
lc:0,																
uc:0,																
meaning:0,																
shape: 0,																
numLoc: 0,																
																
nnameLoc: 11,																
nameLoc: 12,																
ucsName: 13,																
block: 14,																
																
//othertranscriptions: [[5, 'Latin']]																
}																