import React from 'react'
import { ProductType } from '../types/product'
import { Link } from 'react-router-dom'


type ProductMangagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = (props: ProductMangagerProps) => {
    return (
        <div>
            <button onClick={() => props.onAdd()}>Thêm mới</button>
            <table className="table table-bordered">
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                                <button onClick={() => props.onRemove(item.id)}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager