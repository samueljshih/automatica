const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl font-bold mb-14 text-indigo-400">Automatica</h1>
      <form action="">
        <input type="file" id="resume" name="user_resume" />
        <input
          type="submit"
          className="bg-indigo-400 hover:bg-indigo-600 text-white py-2 px-4 rounded"
        />
      </form>
    </div>
  );
};

export default Form;
