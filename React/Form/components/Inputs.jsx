function Inputs(){
    return(
        <>
        <h1 className="form-title">Form</h1>
        <form className="student-form" action="">
            <label className="field">
                <span>Name</span>
                <input className="form-input" type="text" placeholder="Enter your name" />
            </label>

            <label className="field">
                <span>Reg Id</span>
                <input className="form-input" type="number" placeholder="Enter registration id" />
            </label>

            <label className="field">
                <span>Email</span>
                <input className="form-input" type="email" placeholder="Enter your email" />
            </label>

            <label className="field">
                <span>Age</span>
                <input className="form-input" type="number" placeholder="Enter your age" />
            </label>

            <label className="field">
                <span>City</span>
                <input className="form-input" type="text" placeholder="Enter your city" />
            </label>

            <label className="field">
                <span>Role</span>
                <select className="form-input" name="role" id="role">
                <option value="student">Student</option>
                <option value="scholar">Scholar</option>
                <option value="teacher">Teacher</option>
            </select>
            </label>

            <button className="submit-btn" type="submit">Submit</button>
        </form>
      </>
    )
}
export default Inputs;