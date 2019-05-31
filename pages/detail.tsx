import * as React from 'react';
import Layout from '../components/Layout';
import { User } from '../interfaces';
import ListDetail from '../components/ListDetail';
import { withAuth } from '../components/withAuth';

interface Props {
    item?: User;
    errors?: string;
}

class InitialPropsDetail extends React.Component<Props> {
    render() {
        const { item } = this.props;
        return (
            <Layout
                title={`${item ? item.name : 'Detail'} | Next.js + TypeScript Example`}
            >
                {item && <ListDetail item={item} />}
            </Layout>
        );
    }
}

export default withAuth(InitialPropsDetail);
