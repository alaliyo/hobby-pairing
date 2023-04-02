import styled from "styled-components";

function GatheringsTable() {
    return(
        <TableBox>
            <TablePost>
                <div>1.</div>
                <div>제목</div>
                <div>작성자</div>
                <div>시간</div>
            </TablePost>
        </TableBox>
    );
}

export default GatheringsTable;

const TableBox = styled.div`
    width: 100%;
    border: 2px solid gray;
    border-radius: 15px;
    padding: 10px;
    height: 600px;
`;

const TablePost = styled.div`
    display: grid;
    grid-template-columns: 50px auto 120px 120px;
    font-weight: 900;
    height: 35px;
    margin-top: 5px;
    border-bottom: 2px solid #d4d4d4;
    div {
        text-align: right;
        &:nth-child(1) {
            margin-right: 5px;
        }
        &:nth-child(2) {
            text-align: left;
        }
    }
`;