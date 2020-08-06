interface RootObject {
  cases_time_series: Casestimesery[];
  statewise: Statewise[];
  tested: Tested[];
}

interface Tested {
  individualstestedperconfirmedcase: string;
  positivecasesfromsamplesreported: string;
  samplereportedtoday: string;
  source: string;
  source1: string;
  testedasof: string;
  testpositivityrate: string;
  testsconductedbyprivatelabs: string;
  testsperconfirmedcase: string;
  testspermillion: string;
  totalindividualstested: string;
  totalpositivecases: string;
  totalsamplestested: string;
  updatetimestamp: string;
}

interface Statewise {
  active: string;
  confirmed: string;
  deaths: string;
  deltaconfirmed: string;
  deltadeaths: string;
  deltarecovered: string;
  lastupdatedtime: string;
  migratedother: string;
  recovered: string;
  state: string;
  statecode: string;
  statenotes: string;
}

interface Casestimesery {
  dailyconfirmed: string;
  dailydeceased: string;
  dailyrecovered: string;
  date: string;
  totalconfirmed: string;
  totaldeceased: string;
  totalrecovered: string;
}