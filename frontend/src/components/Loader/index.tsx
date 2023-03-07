import { PropagateLoader } from 'react-spinners'

type LoaderProps = {
    color: string,
    loading: boolean,
    classname?: string
}
export default function Loader({ color, loading, classname }: LoaderProps) {

    return (
        <PropagateLoader color={color} loading={loading} className={`${classname}`} />
    )
}
