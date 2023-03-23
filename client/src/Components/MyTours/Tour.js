import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Navbar/Header";
import "./Tour.css";
import axios from "axios";
import Btn from "../Btn";
import Loading from "../Loading/Loading";

const Tours = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navItems = [
    {
      title: "Home",
      path: "/index",
    },
    {
      title: "Gallery",
      path: "/index/#gallery",
    },
    {
      title: "Places",
      path: "/places/all",
    },
    {
      title: "Services",
      path: "/index/#services",
    },
  ];

  const [tours, setTours] = useState([]);
  const userL = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get(`http://localhost:9000/payment/mybookings/${userL.username}`)
      .then((resp) => {
        console.log(resp.data);
        setLoading(false);
        return setTours(resp.data);
      });
  }, [userL.username, setTours]);

  useEffect(() => {
    const userL = JSON.parse(localStorage.getItem("user"));
    axios
      .get(`http://localhost:9000/users/loguser/${userL.username}`)
      .then((resp) => {
        return setUser(resp.data.user);
      });
  }, []);

  return (
    <div>
      <Header user={user} navItems={navItems} />

      {loading ? (
        <Loading />
      ) : (
        <div>
          {tours.length === 0 ? (
            <h1>Your Tour List is Empty</h1>
          ) : (
            <div>
              <div className="tour-item-class">
                {tours
                  ? tours.map((item, key) => {
                      return (
                        <div className="tour-item-box" key={key}>
                          <div className="tour-details">
                            <table>
                              <tr style={{fontSize: "20px"}}>
                                <th>From</th>
                                <th>To</th>
                                <th>No. of Passengers</th>
                                <th>Departure</th>
                                <th>Arrival</th>
                                <th>Total amount</th>
                              </tr>
                              <tr>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                                <td>{item.numberOfpassengers}</td>
                                <td>{item.fromdate}</td>
                                <td>{item.todate}</td>
                                <td>{item.numberOfpassengers * item.price}</td>
                              </tr>
                            </table>
                            
                          </div>
                          <div className="tour-button">
                            <Btn
                              value="Book Now"
                              type="button"
                              onClick={() => {
                                navigate(`/payment/${item.id}`);
                              }}
                            />
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tours;
