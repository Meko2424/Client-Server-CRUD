import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM student";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO student(`name`, `email`, `phone`, `program`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.program,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("User added successfully.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE student SET `name` = ?, `email` = ?, `phone` = ?, `program` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.program,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("User updated successfully.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM student WHERE `id` = ?";
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("User deleted successfully.");
  });
};
