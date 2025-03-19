import React, { useState } from 'react';

export default function PvlFormUser({ onAddUser }) {
  const [form, setForm] = useState({ id: '', PvlFullName: '', PvlUserName: '', PvlPass: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(form);
    setForm({ id: '', PvlFullName: '', PvlUserName: '', PvlPass: '' });
  };

  return (
    <div>
      <h2>Thêm Người Dùng</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" value={form.id} onChange={handleChange} required />
        <input type="text" name="PvlFullName" placeholder="Họ và Tên" value={form.PvlFullName} onChange={handleChange} required />
        <input type="text" name="PvlUserName" placeholder="Tên Đăng Nhập" value={form.PvlUserName} onChange={handleChange} required />
        <input type="password" name="PvlPass" placeholder="Mật Khẩu" value={form.PvlPass} onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

