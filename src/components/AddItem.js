import React from 'react';

class AddItem extends React.Component {
    productOptions = this.props.products.map((product, i) => <option key={i} value={i}>{product.name}</option>);

    state = {};

    handleChange = e => {
        this.setState({
            quantity: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='container'>
                <div className="form-group">
                    <label>Quantity</label>
                    <input onChange={this.handleChange} type='number' className='form-control' name='quantity'/>
                </div>
                <label>Products</label>
                <div className='input-group mb-3'>
                    <select onChange={(e) => this.setState({product: this.props.products[e.target.value]})} className='custom-select' id='inputGroupSelect01' name='name'>
                        <option>Select an option...</option>
                        {this.productOptions}
                    </select>
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        )
    }

}

export default AddItem