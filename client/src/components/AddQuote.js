import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

class AddQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Author: '',
      Quote: '',
      description: ''
    }

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onLoadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    const Author = this.state.Author.trim();
    this.props.addQuote(
      Author,
      this.state.Quote,
      this.state.imagePreviewUrl
    );
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>>
          <label>Quote Author</label>
          <input value={this.state.Author} name='Author' onChange={(e) => this.setState({Author: e.target.value})} placeholder='Quote Author' />
        </Form.Field>
        <Form.Field>>
          <label>Quote Image</label>
          <input type='file' name='image' onChange={this.handleImageChange}/>
        </Form.Field>
        <Form.Field>>
          <label>Quote Description</label>
          <Form.TextArea value={this.state.Quote} name='Quote' onChange={(e) => this.setState({Quote: e.target.value})} placeholder='Quote Description' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
export default AddQuote;
