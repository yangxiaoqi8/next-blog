import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col, List, Avatar, Icon, Pagination, Alert, Input, Button, Select} from 'antd'
import {connect} from 'react-redux'
import Head from 'next/head';

import EditArticle from '../../components/EditArticle';
import {POST_ARTICLE_TXT,COMMON_TITLE} from '../../config/constantsData';

const {Content} = Layout;



class PostArticle extends Component {
  constructor() {
    super()
    this.state = {

    }

  }




  render() {
    return (
      <div>
        <Head>
          <title>{POST_ARTICLE_TXT}{COMMON_TITLE}</title>
        </Head>
        <div className="post-article">
          <Layout>
            <Content style={{padding: '0 50px'}}>
              <EditArticle/>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default connect()(PostArticle)
