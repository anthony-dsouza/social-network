import Card from "../UI/Card";
import JoinedGroup from "./JoinedGroup";
import classes from './AllJoinedGroups.module.css';
import useGet from "../fetch/useGet";

function AllJoinedGroups(   ) {

    // const { data } = useGet("/group");

    return <Card>
        <div className={classes.label}>
        Groups you've joined
        </div>
        {/* {data.map((group) => (
         <JoinedGroup
        key={group.id}
        id={group.id}
        title={group.title} 
        creator={group.creator}
        description={group.description}  
        // img={group.img}
        />
        ))} */}
    </Card>
}

export default AllJoinedGroups;