const productos = [
    {id:'100H',
    Tipo:'remera', 
    name:'Remera Basic 1', 
    img:'https://equus.vtexassets.com/arquivos/ids/227051-1600-auto?v=637814174554100000&width=1600&height=auto&aspect=true', 
    cant:'10', 
    genero:'hombre', 
    precio:1800},

    {id:'101H',
    tipo:'remera', 
    name:'Remera Basic V', 
    img:'https://topitop.vteximg.com.br/arquivos/ids/168336-302-385/1682518_1.jpg?v=637236810649230000', 
    cant:'10', 
    genero:'hombre', 
    precio:1800},

    {id:'102H',
    tipo:'remera', 
    name:'Sudadera Basic V', 
    img:'https://topitop.vteximg.com.br/arquivos/ids/221861-635-792/1682437_1.jpg?v=637719907679470000', 
    cant:'10', 
    genero:'hombre', 
    precio:1800},

    {id:'200M',
    tipo:'jean', 
    name:'Jean Woman 1', 
    img:'https://static.dafiti.com.ar/p/koxis-8831-835229-1-product.jpg', 
    cant:'10', 
    genero:'mujer', 
    precio:4600},

    {id:'201M',
    tipo:'remera', 
    name:'Top Urban', 
    img:'https://cdn.fashiola.mx/L572041427/highstreet-camiseta-de-manga-corta.jpg', 
    cant:'10', 
    genero:'mujer', 
    precio:1800},

    {id:'202M',
    tipo:'jean', 
    name:'Short Jean', 
    img:'https://img.ltwebstatic.com/images3_pi/2020/03/25/1585105225ea8b0088e5a5c231a9bc25beb273774d_thumbnail_600x.webp', 
    cant:'10', 
    genero:'mujer', 
    precio:2500},

    {id:'300O',
    tipo:'conjunto', 
    name:'Outfit Urban X', 
    img:'https://st3.depositphotos.com/3917667/35677/i/450/depositphotos_356775140-stock-photo-trendy-fashionable-couple-isolated-on.jpg', 
    cant:'10', 
    genero:'unisex', 
    precio:5700},

    {id:'301O',
    tipo:'conjunto', 
    name:'Outfit Urban Black', 
    img:'https://c8.alamy.com/zoomses/9/da42c05ee37943c1b55bf54fc9667d27/2bwwtbk.jpg', 
    cant:'10', 
    genero:'unisex', 
    precio:8700},

    {id:'302O',
    tipo:'conjunto', 
    name:'Outfit Urban Basic', 
    img:'https://us.123rf.com/450wm/dolgachov/dolgachov1911/dolgachov191101210/133617016-retrato-de-pareja-feliz-en-camisetas-blancas.jpg?ver=6', 
    cant:'10', 
    genero:'unisex', 
    precio:6300},

    {id:'400A',
    tipo:'mochila', 
    name:'Mochila VART', 
    img:'https://cdn.shopify.com/s/files/1/1541/9897/products/21-02-2017_fjallraven_kanken_graphite_23510-031_sh_m1_600x.jpg?v=1570150722', 
    cant:'10', 
    genero:'accesorios', 
    precio:9300},

    {id:'401A',
    tipo:'riñonera', 
    name:'Riñonera Urban XL', 
    img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/745/457/products/img-20220204-wa01031-1f7bae80373aadf4fa16440126099677-1024-1024.jpg', 
    cant:'10', 
    genero:'accesorios', 
    precio:2100}
]

export const getProducts = () => {
    return new Promise ((resuelto, rechazado) => {
        setTimeout(() => {
            resuelto(productos)
        }, 1500);
    })
}

export const getProduct = (id) => {
    return new Promise ((resuelto, rechazado) => {
        setTimeout(() => {
            resuelto(productos.find(prod => prod.id === id))
        }, 1000);
    }
    )
}

export const GetProductsByCategory = (categoriaId) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.genero === categoriaId))
        }, 1000);
    })
}