import React from 'react'
import { Column } from '.'

const Footer = (props) => {
    const { column1, column2, column3 } = props
    return (
        <footer class="py-4 bg-dark text-white-50" style={{ marginTop: "-10px" }}>
            <div className="row">
                <Column items={column1} />
                <Column items={column2} />
                <Column items={column3} />
            </div>
        </footer>
    )
}
export default Footer