import "../PracticeThings/arraywithobj.css";
/*Array in jsx (map)*/
// function Arr() {
//   // const fruits = ["apple", "mango", "banana"];

//   // fruits.map((fruits) => console.log(fruits));

//   const college = [
//     { name: "nist", address: "banepa" },
//     { name: "patan", address: "lalitpur" },
//     { name: "bmc", address: "bhaktapur" },
//     { name: "ambition", address: "kathmandu" },
//   ];

//   college.map((college) => console.log(college.name));

//   return <></>;
// }

function Component() {
  const fruits = [
    { name: "apple", color: "red", taste: "sweet" },
    { name: "banana", color: "yellow", taste: "sweety" },
    { name: "grapes", color: "green/black", taste: "sweetiest" },
  ];

  const head = [
    { id: 1, name: "S.N" },
    { id: 2, name: "Fruits" },
    { id: 3, name: "Color" },
    { id: 3, name: "Taste" },
  ];
  return (
    <>
      <div className="table1">
        <table>
          <thead>
            <tr>
              {head.map((heading, id) => (
                <th key={id}>{heading.name}</th>
              ))}
            </tr>
            {fruits.map((fruit, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
                <td>{fruit.taste}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
}

export default Component;
