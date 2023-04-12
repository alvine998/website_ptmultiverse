import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';

function ModalCategory(props) {
    return (
        <Modal
            show={props?.toggle}
            onHide={() => { props?.setToggle(!props?.toggle) }}
            animation
        >
            <Modal.Header closeButton>
                <Modal.Title>{props?.keys == 'create' ? 'Tambah Kategori' : props?.keys == 'update' ? 'Ubah Kategori' : 'Hapus Kategori'}</Modal.Title>
            </Modal.Header>

            <Form method={props?.keys == 'create' ? 'post' : props?.keys == 'update' ? 'patch' : 'delete'}>
                <Modal.Body>
                    {
                        props?.keys == 'delete' ? <>
                            <p>Anda yakin ingin menghapus data kategori ini?</p>
                        </> : <>
                            <Input name='name' defaultValue={props.toggleData?.Name || ""} onChange={props.handleChange} label='Nama Kategori' placeholder='Masukkan nama kategori' required />
                            <Input name='notes' defaultValue={props.toggleData?.Notes || ""} onChange={props.handleChange} label='Keterangan' placeholder='Masukkan keterangan' />
                        </>
                    }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props?.setToggle(!props?.toggle)}>Kembali</Button>
                    {
                        props?.keys == 'delete' ? <>
                            <Button variant="danger" onClick={props.remove}>Hapus</Button>
                        </> : <>
                            <Button variant="primary" onClick={props?.keys == 'update' ? props.update : props.save}>Simpan</Button>
                        </>
                    }
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default ModalCategory;