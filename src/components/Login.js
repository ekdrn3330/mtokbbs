import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Login() {
 
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
        <div>
            <Container>
                <Form action="/login" method="POST">
                    <h2>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control type='text' name='input_id' placeholder="아이디를 입력해주세요." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" name='input_pw' placeholder="비밀번호를 입력해주세요." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;