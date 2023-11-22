import * as React from "react";
import { Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Select, FormControl, InputLabel, Box, MenuItem, Button, Slider } from "@mui/material";

const Edit = (props) => {
  const { categories } = props;
  const { data, setData, put } = useForm({
    name: categories.name,
    weight: categories.weight,
    description: categories.description,
    user_id: props.user_id,
  });

  const handleSendExpenses = (e) => {
    e.preventDefault();
    put(`/home/category/${categories.id}`);
  };

  return (
    <Authenticated
      auth={props.auth}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit
        </h2>
      }
    >
      <div className="p-8">
        <form onSubmit={handleSendExpenses} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="Catgory Name"
              className="block text-sm font-medium text-gray-600"
            >
              Category name
            </label>
            <input
              type="text"
              id="category"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
            <span className="text-red-600">{props.errors.name}</span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="Weight"
              className="block text-sm font-medium text-gray-600"
            >
              Weight
            </label>
            <Slider
              value={data.weight}
              onChange={(e, value) => setData("weight", value)}
              step={0.1}
              marks
              min={0}
              max={9.9}
            />
            {/* Display the value of the Slider */}
            <div className="mt-2">
              <strong>Current Weight: {data.weight}</strong>
            </div>
            <span className="text-red-600">{props.errors.weight}</span>
          </div>

          
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              value={data.description}
              onChange={(e) => setData("description", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
            <span className="text-red-600">{props.errors.description}</span>
          </div>

          <Button
            type="submit"
            className="p-2 bg-purple-300 hover:bg-purple-400 rounded-md text-white"
          >
            Edit
          </Button>
        </form>
      </div>
    </Authenticated>
  );
};

export default Edit;