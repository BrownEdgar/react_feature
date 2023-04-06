import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";
import "./App.scss";

export default function App() {
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const [deleteItemId, setDeleteItemId] = useState(0);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
			.then((response) => response.json())
			.then((json) => setData(json));
	}, []);

  return (
    <div>
      {isOpen && (
        <Modal>
          <div className="Modal-Content w-100">
            <h2>Are you sure?</h2>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button
              onClick={() => {
                setIsOpen(false);
                handleDelete(deleteItemId);
                setDeleteItemId(0);
              }}
            >
              Delete
            </button>
          </div>
        </Modal>
      )}

      {divShow && (
        <div className="wrapper">
          <ul className="first">
            {data.map((user) => (
              <li>
                {user.name}
                <button
                  className="btn_delete"
                  onClick={() => {
                    setIsOpen(true);
                    setDeleteItemId(user.id);
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	return (
		<div>
			{isOpen && (<Modal>
				<div className="Modal-Content w-100">
					<h2>Are you sure?</h2>
					<button onClick={() => setIsOpen(false)}>Cancel</button>
					<button
						onClick={() => {
							setIsOpen(false);
							handleDelete(deleteItemId);
							setDeleteItemId(null);
						}}>Delete</button>
				</div>
			</Modal>
			)}


			<div className="wrapper">
				<ul className="first">
					{data.map((user) => (
						<li>{user.name}
							<button className="btn_delete" onClick={() => {
								setIsOpen(true);
								setDeleteItemId(user.id);
							}}>X</button>
						</li>
					))}
				</ul>
			</div>

		</div>
	)


