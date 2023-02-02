export interface VueDaumPostcodeTheme {
  bgColor?: string | null;
  searchBgColor?: string | null;
  contentBgColor?: string | null;
  pageBgColor?: string | null;
  textColor?: string | null;
  queryTextColor?: string | null;
  postcodeTextColor?: string | null;
  emphTextColor?: string | null;
  outlineColor?: string | null;
}

export interface VueDaumPostcodeCompleteResult {
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: string;
  bcode: string;
  bname: string;
  bnameEnglish: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  userLanguageType: string;
  query: string;
  buildingName: string;
  buildingCode: string;
  apartment: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  roadAddress: string;
  roadAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  userSelectedType: string;
  noSelected: string;
  hname: string;
  roadnameCode: string;
  roadname: string;
  roadnameEnglish: string;
}

export interface VueDaumPostcodeSearchResult {
  q: string;
  count: number;
}

export interface VueDaumPostcodeResizeResult {
  width: number;
  height: number;
}
