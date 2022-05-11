import { useState } from "react"

const ToggleMenu = () => {
    const [open, setOpen] = useState<boolean>(false)

    return <div>
        <button onClick={() => setOpen(!open)}>Toggle Menu</button>
        {
            open && <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        }
    </div>
}

export default ToggleMenu