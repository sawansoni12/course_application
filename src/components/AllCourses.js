import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from "reactstrap";
import "./AllCourses.css";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Java Course",
    description: "OOP, collections & multithreading",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
  },
  {
    id: 2,
    title: "Python Course",
    description: "Syntax, libraries & automation",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
  },
  {
    id: 3,
    title: "Django Course",
    description: "Models, views & REST APIs",
    image: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
  },
  {
    id: 4,
    title: "Angular Course",
    description: "Components, routing & services",
    image: "https://cdn-icons-png.flaticon.com/512/919/919828.png"
  },
  //yaha se add kar raha hu me
  {
    id: 5,
    title: "Data Structures",
    description: "Arrays, stacks, queues, trees & algorithms",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
    color: "ds"
  },
  {
    id: 6,
    title: "SQL & Databases",
    description: "SQL queries, joins, normalization & DB design",
    image: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    color: "sql"
  },
  {
    id: 7,
    title: "C / C++ Programming",
    description: "C & C++ fundamentals with memory management",
    image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    color: "cpp"
  },
  {
    id: 8,
    title: "Machine Learning",
    description: "ML models, data training & predictions",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    color: "ml"
  },
  {
    id: 9,
    title: "Artificial Intelligence",
    description: "AI concepts, neural networks & automation",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
    color: "ai"
  }
];

const AllCourses = () => {
  const navigate=useNavigate();
  return (
    <div className="courses-container">
      <h2 className="courses-title">All Courses</h2>
      <p className="courses-subtitle">List of courses are as follows</p>

      <Row>
        {courses.map((course) => (
          <Col md={6} lg={4} key={course.id} className="mb-4">
            <Card className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />

              <CardBody>
                <CardTitle tag="h5">{course.title}</CardTitle>
                <CardText>{course.description}</CardText>

                <div className="course-buttons">
                  {/* <Button color="danger" size="sm">
                    Delete
                  </Button>
                  <Button color="warning" size="sm">
                    Update
                  </Button> */}
                  <button
                className="view-btn"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                View Details
              </button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllCourses;