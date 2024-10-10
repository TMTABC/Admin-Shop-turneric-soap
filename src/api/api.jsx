// api.jsx

// Hàm fetch danh sách tất cả sản phẩm
export const fetchInfo = async () => {
    try {
        //const response =
           return  await fetch('http://localhost:4000/allproducts').then((res)=>res.json());
        // const data = await response.json();
        //return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

// Hàm để xóa sản phẩm
export const remove_product = async (id) => {
    try {
        await fetch('http://localhost:4000/removedproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
    } catch (error) {
        console.error('Error removing product:', error);
    }
};

// api.jsx
export const uploadImage = async (image) => {
    let formData = new FormData();
    formData.append('product', image);
    try {
            return  await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((res)=>res.json());
    } catch (error) {
        console.error('Error uploading image:', error);
        return { success: false };
    }
};

export const addProduct = async (product) => {
    try {
            return await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then((res)=>res.json());
    } catch (error) {
        console.error('Error adding product:', error);
        return { success: false };
    }
};

