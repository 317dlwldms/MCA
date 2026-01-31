import { useState } from "react";

export default function Body(){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {setName(e.target.value)};
    const onChangeGender = (e) => {setGender(e.target.value)};
    const onChangeBirth = (e) => {setBirth(e.target.value)};
    const onChangeBio = (e) => {setBio(e.target.value)};

    return(
        <div className="body">
            <div>
                <input type="text" value={name} onChange={onChangeName} placeholder="이름을 입력하세요."></input>
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth}></input>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} placeholder="내용을 입력하세요."></textarea>
            </div>
            <div>
                <p>{name}은 {gender}이며 생년월일은 {birth}이고, 현재 {bio} 상태이다.</p>
            </div>
        </div>
    )
}
