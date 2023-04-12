import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';

function ModalAccount(props) {

  const handleChange = (e) => {
    props.setPayload({ ...props.payload, [e.target.name]: e.target.value })
  }

  return (
    <Modal
      show={props?.toggle}
      onHide={() => { props?.setToggle(!props?.toggle) }}
      animation
    >
      <Modal.Header closeButton>
        <Modal.Title>{props?.keys == 'create' ? 'Tambah Akun Pengguna' : props?.keys == 'update' ? 'Ubah Akun Pengguna' : 'Hapus Akun Pengguna'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {
          props?.keys == 'delete' ? <>
            <p>Anda yakin ingin menghapus akun {props.detail?.Email}?</p>
          </> : <>
            <Input onChange={handleChange} name="name" label='Nama Lengkap' defaultValue={props.detail?.Name || ""} placeholder='Masukkan nama lengkap' required />
            <Input onChange={handleChange} name="email" label='Email' defaultValue={props.detail?.Email || ""} placeholder='Masukkan email' type={'email'} required />
            <Input onChange={handleChange} name="phone" label='No Hp' defaultValue={props.detail?.Phone || ""} placeholder='Masukkan no hp' required />
            {
              props?.keys !== 'update' ?
                <Input onChange={handleChange} name="password" label='Password' placeholder='********' required type={'password'} />
                : ''
            }
          </>
        }
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => props?.setToggle(!props?.toggle)}>Kembali</Button>
        {
          props?.keys == 'delete' ? <>
            <Button variant="danger" onClick={props.actions}>Hapus</Button>
          </> : props?.keys == 'update' ? <>
            <Button variant="success" onClick={props.actions}>Update</Button>
          </>
            :
            <>
              <Button variant="primary" onClick={props.actions}>Simpan</Button>
            </>
        }
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAccount;