import React from "react";
import './style.scss'

export default function Tags({ tag }) {
  return (
    <>
      {/* đặt key={item} là sai nha. Nếu bên trong mảng không có phần tử để phân biệt thì dùng tham số thứ hai của hàm map là index để phân biệt */}
      {tag.map((item, index) => (
        <div className="tag-item" key={index}>
          {item}
        </div>
      ))}
      {/* code đúng  {tag.map((item, index) => <div className='tag-item' key={index}>{item}</div>)} */}
    </>
  );
}