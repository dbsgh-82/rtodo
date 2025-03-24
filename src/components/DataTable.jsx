export default function DataTable(
  {
    headers
  , items = [],
  }) {

  /* 본문과 매핑할 헤더 키 */
  const headerKey = headers.map(header => header.value);
  return (
    <table className="border-collapse border border-gray-300">
      <thead>
        <tr>
          {
            /* map함수로 header 만들기 */
            headers.map((header) => 
              <th key={header.text} className="border border-gray-300 px-4 py-2">
                {header.text}
              </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          /* map함수로 body 만들기 */
          items.map((i, idx) => (
            <tr key={idx}>
              {/* headerKey를 순회하면서 key를 가져옴 */}
              {
                headerKey.map(key =>
                  <td key={key + idx} className="border border-gray-300 px-4 py-2">
                    {/* key로 객체의 값을 출력 */}
                    {i[key]}
                  </td>
                )
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}