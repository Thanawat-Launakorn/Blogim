import { v4 as uuid } from 'uuid'
export interface blogItem {
    id: string,
    title: string,
    body: string,
    author: string,
    image?: string,
    date: any | Date
}

export let blog: blogItem[] = [
    {
        id: '1',
        title: 'Wow!',
        body: `Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        author: 'shimi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqsDSfInmyEKX3DdXQNpPWJR3D8uAdOpCgzA856m9l8hxnIDribP0QgTGCsBAuwu8ROE&usqp=CAU',
        date: '17.2.23, 13:20'
    },
    {
        id: '2',
        title: 'Love',
        body: `Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        
        
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        author: 'rose',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxp_EGLHSzXOtdSe8k7mdmMjCdallY1rtDS48pgesuXTPHfLjdWh5zI8zv4MiOiWZj11M&usqp=CAU',
        date: '18.2.23, 16:31'
    },
    {
        id: '3',
        title: 'Where does it come from?',
        body: `Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
        author: 'yossi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBQF_qZluG0OnyvSIoLeJ75riG6jhG6yjKtm-_8aqIdrK0Wb3lVsVR2_3S9I5Q6TYwKE&usqp=CAU',
        date: '20.2.23, 23:19'
    },
    {
        id: '4',
        title: 'My Blog',
        body: 'do something...',
        author: 'thanawat',
        image: '',
        date: ''
    },

]


export function addBlog(data: Omit<blogItem, 'id'>) {
    const id = uuid()
    blog.push({
        id, ...data
    })

    return id
}

export function findBlog(data: Pick<blogItem, 'id'>) {
    const idBlog = blog.filter((it: blogItem) => {
        return it.id === data.id
    })
    return idBlog

}

export function deleteBlog(data: Pick<blogItem, 'id'>) {
    blog = blog.filter((it: blogItem) => {
        return it.id !== data.id
    })
    return blog

}

export function searchBlog(data: Pick<blogItem, 'author'>) {
    const authorBlog = blog.filter((it: blogItem) => {
        return it.author === data.author
    })

    return authorBlog
}