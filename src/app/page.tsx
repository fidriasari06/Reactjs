<<<<<<< HEAD
"use client";


import React, { useState, useEffect } from 'react';
import { Stack,Button,Card,CardText } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";
import Image from "next/image";



export default function Home() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">

                    <h1 style={{ fontSize: "24px", color: "blue" }}>Home Movie List</h1>
                    <h2 style={{ fontSize: "20px", color: "black" }}>FIDRIA SARI</h2>
                    <h3 style={{ fontSize: "16px", color:"red" }}>Kelas Pemrograman Web</h3>

            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                 Button as link
                    </Button>
                    <Button as="a" variant="success">
                      Button as link
                    </Button>
                  </Stack>

                  </div>
      </div>
      
      <div className="row">
      <div className="col-md-8">
        <br/>
          <MovieForms />
<br/>
          </div>
      </div>
  <div className='bg-secondary' >
        <MovieCard/>
        </div>
         </div>
  );
}
=======
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1 style={{ fontSize: "24px", color: "white" }}>Home Movie List</h1>
    <h2 style={{fontSize: "20px", color: "blue" }}>FIDRIA SARI</h2>
    <h3 style={{ fontSize: "16px", color:"yellow" }}>Kelas Pemrograman Web</h3>
  </div>
);
}
>>>>>>> d9cf8074d9bb172faaf30f7ce87ac124abf5c85d
