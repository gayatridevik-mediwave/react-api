import Page from "../components/Page";

const AddNewMoviePage = () => {
  return (
    <Page title="Add Movie Page">
      <h1>Add Movie Page</h1>
      <p>{process.env.REACT_APP_NAME}</p>
    </Page>
  );
};

export default AddNewMoviePage;
