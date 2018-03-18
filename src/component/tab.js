import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';


// import { hot } from 'react-hot-loader'


const {Tab, TabBarItem, Article, SearchBar, TabBar,TabBarLabel,TabBody,
    Panel, PanelHeader, PanelBody, PanelFooter,CellMore,
    MediaBox,MediaBoxHeader,MediaBoxBody,MediaBoxTitle,MediaBoxDescription,
    CellsTitle,Cells,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    iconSrc,
    Badge,
    TabBarIcon
} = WeUI;


import IconMsg from '../img/home.png';
import IconArticle from '../img/home.png';

import IconHome from '../img/home.png';
import IconUser from '../img/user.png';



import {
    Link,Redirect
  } from 'react-router-dom'


import 'weui';
import 'react-weui/build/packages/react-weui.css';

import BDDetail from './detail';

export default class BDTab extends React.Component {


    constructor() {
        super();
      }

    state={
        tab:0
    };


    clickHandle(url) {
        this.props.history.push(url)
      }


render() {
    let items=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]

        return (

           

            <Tab>
            <TabBody>
            

                <Panel  style={{display: this.state.tab == 0 ? null : 'none'}}>
                <PanelBody>
            <SearchBar placeholder="请输入您要查找的图书" lang={{cancel: '取消'}} />
                
                {
            
                    items.map((item,i) => {

                        return (
                            <MediaBox key={i} type="appmsg" onClick={this.clickHandle.bind(this, '/detail')}>
                            <MediaBoxHeader><img src={IconMsg} /></MediaBoxHeader>
                                                <MediaBoxBody>
                                                    <MediaBoxTitle> dddd </MediaBoxTitle>
                                                    <MediaBoxDescription>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </MediaBoxDescription>
                                                </MediaBoxBody>
                            </MediaBox>
                        )
                    })
                }
                            
            
                </PanelBody>
                </Panel>

                <div style={{display: this.state.tab == 1 ? null : 'none'}}>
                <Cells>

                    <Cell onClick={this.clickHandle.bind(this, '/login')}>
                        <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                            <img src={IconArticle} style={{width: '50px', display: 'block'}} />
                           
                        </CellHeader>
                        <CellBody>
                            <p>光头强</p>
                            <p style={{fontSize: '13px', color: '#888888'}}>欢迎来到图书漂流！</p>
                        </CellBody>
                    </Cell>
                  
                  
                    <Cell href="javascript:;" access>
                        <CellBody>
                            发出的申请 <Badge preset="body">8</Badge>
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell href="javascript:;" access>
                        <CellBody>
                            收到的申请 <Badge preset="body">8</Badge>
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell access>
                        <CellBody>
                            收藏
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell access onClick={this.clickHandle.bind(this, '/address')}>
                    <CellBody>
                        地址
                    </CellBody>
                    <CellFooter/>
                </Cell>
                </Cells>

                <Cells>
                <Cell access onClick={this.clickHandle.bind(this, '/about')}>
                
                    <CellBody>
                        帮助
                    </CellBody>
                    <CellFooter/>
                
                </Cell>
                <CellFooter/>
                
                <Cell access onClick={this.clickHandle.bind(this, '/about')}>
                    <CellBody>
                        关于
                    </CellBody>
                    <CellFooter/>
                     
                </Cell>







                
                <Cell>
                    <CellBody>
                            版本  
                    </CellBody>
                    <CellFooter>
                    V2.2.1
                </CellFooter>
                  
                </Cell>
                
            </Cells>
                </div>

           
            </TabBody>

        
            <TabBar>
            <TabBarItem active={true} icon={<img src={IconHome}/>} label="书单"  active={this.state.tab == 0}
            onClick={e=>this.setState({tab:0})}/>
         
                <TabBarItem icon={<img src={IconUser}/>} label="我"  active={this.state.tab == 1}
                onClick={e=>this.setState({tab:1})}/>
            </TabBar>
            </Tab>
        
  

        );
    }
};