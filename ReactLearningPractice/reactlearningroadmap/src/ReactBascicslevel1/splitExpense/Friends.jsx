import React, { useState } from "react";
import Button from "./Button";
import Addfriend from "./AddFriend";
import SplitingBill from "./SplitingBill";
import "./SplitExpenses.css";

function Friends() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 10,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friendsList, setFriendsList] = useState(initialFriends);
  const [addForm, setAddForm] = useState(false);
  const [seletedFriend, setSelectedFriend] = useState(null);

  const onFriendAdd = (friend) => {
    setFriendsList((friendsList) => [...friendsList, friend]);
  };

  const selectedFriend = (friend) => {
    setAddForm(false);
    setSelectedFriend((seletedFriend) =>
      seletedFriend?.id === friend.id ? null : friend
    );
  };

  const ButtonSubmitt = (selectedFriend) => {
    console.log(selectedFriend);
    setFriendsList((selected) =>
      selected.map((friend) =>
        friend.id === seletedFriend.id
          ? { ...friend, balance: friend.balance + selectedFriend }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  //const friendData = [{}];
  console.log(addForm);
  return (
    <div>
      <div className="splitform">
        <div className="listoffriends">
          {/* <Button onClick={onClickbutton}>select</Button> */}
          {friendsList.map((friendlist) => (
            <div>
              <div
                className={
                  seletedFriend?.id === friendlist.id
                    ? "selected-friends"
                    : "friends"
                }
              >
                <div className="friendsList">
                  <div className="fiendslist-left">
                    <img src={friendlist.image} className="image" />
                    <div>
                      <p className="name">{friendlist.name}</p>
                      <div className="balance">
                        {friendlist.balance < 0 ? (
                          <p style={{ color: "red" }}>
                            you must pay {Math.abs(friendlist.balance)} to{" "}
                            {friendlist.name}
                          </p>
                        ) : friendlist.balance > 0 ? (
                          <p style={{ color: "green" }}>
                            {friendlist.name} has to pay you{" "}
                            {friendlist.balance}
                          </p>
                        ) : (
                          <p>No payments needed (Settled)</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button onClick={() => selectedFriend(friendlist)}>
                      {seletedFriend?.id === friendlist.id ? "close" : "select"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <Button onClick={onFriendAdd}>Add friend</Button> */}
        </div>
        {seletedFriend && (
          <SplitingBill onSelect={seletedFriend} onBillSubmit={ButtonSubmitt} />
        )}
      </div>
      {addForm && (
        <Addfriend addNewFriend={onFriendAdd} closForm={setAddForm} />
      )}

      <Button onClick={() => setAddForm(!addForm)}>
        {addForm ? "close" : "Add New Friend"}
      </Button>
    </div>
  );
}

export default Friends;
