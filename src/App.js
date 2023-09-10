import React from "react";

import "./Style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactJS from "./question/ReactJS"
import JavaScript from "./question/JavaScript"
import NextJS from "./question/NextJS"
import TypeScript from "./question/TypeScript"
import { Link, Route, Routes } from "react-router-dom";
const App = () => {



  return (
    <>
      <div className="container mt-1">
        <div className="row">
          <div className="col-sm-3">
            <div class="card shadow-lg bg-body rounded">
              <div class="card-body text-center">
                <Link to="/javaScript">JavaScript</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card shadow-lg bg-body rounded">
              <div class="card-body text-center">
                <Link to="/reactJS">ReactJS</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card shadow-lg bg-body rounded">
              <div class="card-body text-center">
                <Link to="/nextJS">NextJS</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="card shadow-lg bg-body rounded">
              <div class="card-body text-center">
                <Link to="/typeScript">TypeScript</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/reactJS' element={<ReactJS />} />
        <Route path='/javaScript' element={<JavaScript />} />
        <Route path='/nextJS' element={<NextJS />} />
        <Route path='/typeScript' element={<TypeScript />} />
      </Routes>
    </>
  );
};
export default App;
