import { 
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    FPRODUCT_LIST_FAIL,
    FPRODUCT_LIST_REQUEST,
    FPRODUCT_LIST_SUCCESS,
    COLLECTION_PRODUCT_LIST_FAIL,
    COLLECTION_PRODUCT_LIST_REQUEST,
    COLLECTION_PRODUCT_LIST_SUCCESS
    
 } from '../constants/productConstants'

// Below is the Products Reducer :: This will be used for store states

 export const productListReducers=(state ={ products:[]},action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{loading:true,products: []}
        case PRODUCT_LIST_SUCCESS:
            return{loading:false,products: action.payload}

        case PRODUCT_LIST_FAIL:
            return{loading:false,error: action.payload}
        
        default:
            return state
    }
}

// Below is the Product Details Reducer :: This will be used for store states

export const productDetailsReducers=(state ={ product:[{reviews:[]}]},action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{loading:true, ...state}
        case PRODUCT_DETAILS_SUCCESS:
            return{loading:false,product: action.payload}

        case PRODUCT_DETAILS_FAIL:
            return{loading:false,error: action.payload}
        
        default:
            return state
    }
}

export const fProductListReducers=(state ={ fproducts:[]},action) =>{
    switch(action.type){
        case FPRODUCT_LIST_REQUEST:
            return{floading:true,fproducts: []}
        case FPRODUCT_LIST_SUCCESS:
            
            return{floading:false,fproducts: action.payload}


        case FPRODUCT_LIST_FAIL:
            return{floading:false,ferror: action.payload}
        
        default:
            return state
    }
}


// collection reducer to request data based on collection 
export const collectionProductListReducers=(state ={ collectionProducts:[]},action) =>{
    switch(action.type){
        case COLLECTION_PRODUCT_LIST_REQUEST:
            return{collecgionLoading:true,collectionProducts: []}
        case COLLECTION_PRODUCT_LIST_SUCCESS:
            
            return{collectionLoading:false,collectionProducts: action.payload}


        case COLLECTION_PRODUCT_LIST_FAIL:
            return{collectionLoading:false,collectionError: action.payload}
        
        default:
            return state
    }
}
