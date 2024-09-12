
const Problem1: React.FC = () => {

    let greeting: string = "Hello, TypeScript"

    let numberList: number[] = [5, 10, 15]

    const calculateSum = (a: number, b: number) => {
        return a + b
    }

    

    return (
    <>
    <div>
        <h1>
            {greeting}
        </h1>
        <ul>Your Lucky Numbers this week
            {numberList.map((numbers) => (
                <li>
                    {numbers}
                </li>
            ))}
        </ul>
        <h4>
            Lets do some math! The sum of 11233 and 22321 is: {calculateSum(11233, 22321)}
        </h4>
    </div>
    </>
  )
}

export default Problem1