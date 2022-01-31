import React, {Component} from "react";


class MyForm extends Component {

    state = {
        form :{first_name:'', last_name: "", email:"", isEdit :""},
        btnName : "Save",
        btnClass : "ui primary button submit-button "
    }

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)){
            this.setState({
                form : {...this.props.customer, isEdit :true},
                btnName : "Update",
                btnClass : "ui orange button submit-button"
            })
        }
    }

    handleChange = event =>{
        const {name, value} = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
    }
    onFormSubmit = event =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.form);

    }

    render() {
        return (
            <form className="ui form">
                <div className="fields">

                    <div className="four wide field">
                        <label>First Name</label>
                        <input type="text"
                               name="first_name"
                               value={this.state.form.first_name}
                               onChange={this.handleChange}
                               placeholder="First Name"/>
                    </div>

                    <div className="four wide field">
                        <label>Last Name</label>
                        <input type="text"
                               name="last_name"
                               placeholder="Last Name"
                               onChange={this.handleChange}
                        value={this.state.form.last_name}
                        />
                    </div>

                    <div className="four wide field">
                        <label>E-mail</label>
                        <input type="email"
                               name="email"
                               onChange={this.handleChange}
                               value={this.state.form.email}
                               placeholder="joe@gmail.com"/>
                    </div>

                    <div className="four wide field">
                        <button className={this.state.btnClass} onClick={this.onFormSubmit}>{this.state.btnName}</button>
                    </div>

                </div>
            </form>
        );
    }
}

export default MyForm;