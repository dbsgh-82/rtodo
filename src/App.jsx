import DataTable from "./components/DataTable"
import Footer from "./components/Footer";
import Header from "./components/Header";

/* 하드코딩 ajax로 가져오면 될듯? */
const headers = [
  {
    text: '상태',
    value: 'state'
  },
  {
    text: '제목',
    value: 'title'
  },
  {
    text: '난이도',
    value: 'launch'
  },
  {
    text: '완료한 사람',
    value: 'complete'
  },
  {
    text: '정답률',
    value: 'acceptanceRate'
  }
];

const items = [
  {
    state: '',
    title: '문자열 출력하기',
    launch: 'lvl 1',
    complete: '7777명',
    acceptanceRate: '71%'
  },
  {
    state: '',
    title: '문자열 출력하기',
    launch: 'lvl 1',
    complete: '7777명',
    acceptanceRate: '71%'
  },
  {
    state: '',
    title: '문자열 출력하기',
    launch: 'lvl 1',
    complete: '7777명',
    acceptanceRate: '71%'
  },
  {
    state: '',
    title: '문자열 출력하기',
    launch: 'lvl 1',
    complete: '7777명',
    acceptanceRate: '71%'
  }
 ];

function App() {

  return (
    <div className="ml-10 mr-10">
      <Header />
      <DataTable 
        headers={headers}
        items={items}
      />
      <Footer />
    </div>
  )
}

export default App
