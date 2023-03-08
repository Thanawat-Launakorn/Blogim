
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
type LabelProps = {
    icon: IconDefinition,
    searchBlogger: string,
    className?: string

}
export default function Label({ icon, searchBlogger, className }: LabelProps) {
    return (
        <div className={`${className}`}>
            <h1 className='text-2xl font-bold'>
                {searchBlogger.length > 0 ? <div>All <span className='text-blue-700'>{searchBlogger}</span>'s Blogs</div> : 'All blogs'}
            </h1>
            <div>
                <FontAwesomeIcon icon={icon} className='text-xl text-blue-700' />
            </div>
        </div >
    )
}
