import React, { useState, useEffect } from "react";
import "./UserCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LazyLoad from "react-lazyload";

export default function UserCard(props) {
  const [userName, setUserName] = useState("");
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          setUserName(result);
          setisLoaded(true);
        },
        error => {
          setisLoaded(false);
        }
      );
  }, []);

  const Load = () => <div>Loading...</div>;

  return (
    <div>
      <Button
        className="logoutbtn"
        block
        size="lg"
        type="submit"
        onClick={props.events.handleLogout}
      >
        Logout
      </Button>
      {userName ? (
        <div>
          {userName.map(item => (
            <LazyLoad height={200}>
              <div key={item.id}>
                <Card className="cardLook">
                  <Card.Img
                    variant="top"
                    src="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_960_720.jpg"
                  />
                  <Card.Body className="usertitleLook">
                    <Card.Title>{item.username}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </LazyLoad>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
