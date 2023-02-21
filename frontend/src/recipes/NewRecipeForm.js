import { useState, useEffect } from 'react'
import { Container, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';

function NewRecipeForm() {
    return (
        <Container className='my-5 mx-5'>
            <h1>Add New Recipe</h1>
            <hr />
            <Form>
                <Row className='mb-3'>
                    <Form.Group>
                        <FloatingLabel
                            controlID='floatingInput'
                            label='Recipe Title'
                            className=''
                        >
                            <Form.Control
                                type='text'
                                placeholder='Enter Recipe Title'
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group>
                        <FloatingLabel
                            controlID='floatingInput'
                            label='Description'
                            className=''
                        >
                            <Form.Control
                                type='text'
                                placeholder='Enter Description'
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <FloatingLabel
                            controlID='floatingInput'
                            label='Recipe Image'
                            className=''
                        >
                            <Form.Control
                                type='text'
                                placeholder='Enter Recipe Image'
                            />
                        </FloatingLabel>
                    </Form.Group>


                    <Form.Group as={Col}>
                        <FloatingLabel
                            controlID='floatingInput'
                            label='Recipe Source'
                            className=''
                        >
                            <Form.Control
                                type='text'
                                placeholder='Enter Recipe Source'
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <hr />

                <Row className='mb-4'>
                    <Form.Label>
                        Categories
                    </Form.Label>
                    <Form.Group as={Col} id="BreakfastCheck">
                        <Form.Check type="checkbox" label="Breakfast" />
                    </Form.Group>
                    <Form.Group as={Col} id="LunchCheck">
                        <Form.Check type="checkbox" label="Lunch" />
                    </Form.Group>
                    <Form.Group as={Col} id="DinnerCheck">
                        <Form.Check type="checkbox" label="Dinner" />
                    </Form.Group>
                    <Form.Group as={Col} id="DessertCheck">
                        <Form.Check type="checkbox" label="Dessert" />
                    </Form.Group>
                </Row>

                <hr />

                <Form.Group className='mb-4'>
                    <Form.Label>Ingredients</Form.Label>
                    <Row>
                        <Form.Text>
                            Separate ingredients by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control as='textarea' className='mt-2' />
                </Form.Group>

                <hr />

                <Form.Group className='mb-3'>
                    <Form.Label>Directions</Form.Label>
                    <Row>
                        <Form.Text>
                            Separate directions by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control as='textarea' className='mt-2' />
                </Form.Group>

                <Form.Group as={Row}>
                    <Col>
                        <Button type="submit">&#43; Add Recipe</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default NewRecipeForm;