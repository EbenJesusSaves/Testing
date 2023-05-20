import { render, screen } from "@testing-library/react"
import { SampleTest } from "./SampleTest"



test('first Test', ()=>{
render(<SampleTest/>)
const testOne = screen.getByText('SampleTest')
expect(testOne).toBeInTheDocument()

})