import WithAuth from "../utils/withAuth";

function PrivateClient() {
  return <div>Private Client</div>;
}

export default WithAuth(PrivateClient);
