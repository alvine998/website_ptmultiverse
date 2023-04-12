import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';

function ModalProduct(props) {
    return (
        <Modal
            show={props?.toggle}
            onHide={() => { props?.setToggle(!props?.toggle) }}
            animation
        >
            <Modal.Header closeButton>
                <Modal.Title>{props?.keys == 'create' ? 'Tambah Produk' : props?.keys == 'update' ? 'Ubah Produk' : 'Hapus Produk'}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    props?.keys == 'delete' ? <>
                        <p>Anda yakin ingin menghapus data produk ini?</p>
                    </> : <>
                        <Input label='Nama Produk' defaultValue={props?.payload?.Name || ''} onChange={props?.handleChange} name="name" placeholder='Masukkan nama produk' required />
                        <div className='my-2'>
                            <label className='form-label'>
                                Kategori
                            </label>
                            <select name='category_id' defaultValue={props?.payload?.Category_id || ''}  onChange={props?.handleChange} className='form-select' required>
                                <option value={""}>Pilih Kategori</option>
                                {
                                    props?.data?.categories?.map((v) => <option key={v.ID} value={v?.ID}>{v?.Name}</option>)
                                }
                            </select>
                        </div>

                        <div className='my-2'>
                            <label className='form-label'>
                                Subkategori
                            </label>
                            <select name='subcategory_id' defaultValue={props?.payload?.Subcategory_id || ''}  onChange={props?.handleChange} className='form-select'>
                                <option value={""}>Pilih Subkategori</option>
                                {
                                    props?.data?.subcategories?.filter((v) => (props?.payload?.category_id  || props?.payload?.Category_id) == v?.Category_id)?.map((v) => <option key={v.ID} value={v?.ID}>{v?.Name}</option>)
                                }
                            </select>
                        </div>
                        <Input label='Harga' defaultValue={props?.payload?.Price || ''}  onChange={props?.handleChange} name="price" placeholder='Masukkan harga' type={'number'} required />
                        <Input label='Stok' defaultValue={props?.payload?.Stock || ''}  onChange={props?.handleChange} name="stock" placeholder='Masukkan stok' type={'number'} required />
                        <Input label='Keterangan' defaultValue={props?.payload?.Notes || ''}  onChange={props?.handleChange} name="notes" placeholder='Masukkan keterangan' />
                    </>
                }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => props?.setToggle(!props?.toggle)}>Kembali</Button>
                {
                    props?.keys == 'delete' ? <>
                        <Button variant="danger" onClick={props.remove}>Hapus</Button>
                    </> : <>
                        <Button variant="primary" onClick={() => { props?.keys == 'create' ? props.save() : props.update() }}>Simpan</Button>
                    </>
                }
            </Modal.Footer>
        </Modal>
    );
}

export default ModalProduct;