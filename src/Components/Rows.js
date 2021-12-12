import React from 'react';
import 
{ 
  Container, Row, Col, Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardImg, Button, Badge, Jumbotron,
  ButtonGroup,ButtonDropdown, ButtonToolbar
   
} from 'reactstrap';

const Rows = (props) => 
{
  return (

    <Container>

  
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">หนังที่คุณไม่ควรพลาด</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    

      <Row xs="2">

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Pacific Rim.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Pacific Rim</CardTitle>
                  <CardText>
                  เมื่อกองทัพสัตว์ประหลาดที่โหดร้ายในนามของ 
                  ไคจู อุบัติขึ้นมาจากทะเล 
                  จึงเกิดสงครามที่คร่าชีวิตคนนับล้าน 
                  และทำลายทรัพยากรของมนุษย์มานานหลายปี 
                  ในการต่อสู้กับสัตว์ประหลาดตัวยักษ์ ไคจู 
                  ทำให้ต้องมีการประดิษฐ์คิดค้นอาวุธพิเศษขึ้นมา หุ่นยนต์ยักษ์ที่เรียกว่า เจเกอร์ส 
                  ซึ่งต้องควบคุมพร้อมกันโดยผู้ควบคุม 2 คน จิตของพวกเขาจะถูกเชื่อมต่อกับสะพานกระแสจิต 
                  แต่ถึงแม้เจเกอร์สจะพิสูจน์ว่า พวกเขาไม่สามารถปกป้องผู้คนให้พ้นจากไคจูจอมอึดได้ 
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 6.9/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText> 
            </CardBody>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Godzilla vs Kong.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Godzilla vs Kong</CardTitle>
                  <CardText>
                  ตำนานที่ต่อสู้กันอย่างน่าตื่นเต้นมาย่างยาวนานโดยมีชะตากรรมของโลก
                  แขวนอยู่บนเส้นขนานคองและผู้ดูแลของเขาสัญญากันว่าจะยอมผจญภัยเสี่ยงตายเพื่อหาบ้านที่แท้จริงของเขา 
                  สาวน้อยเด็กกำพร้าร่วมทางไปกับพวกเขาจนเกิดความผูกพันอย่างแน่นแฟ้นและไม่เหมือนใคร 
                  แต่พวกเขากลับต้องเผชิญหน้ากับก็อดซิลล่าที่กำลังคลุ้มคลั่ง 
                  ปล่อยรัศมีการทำลายล้างกระจายไปทั่วโลก 
                  ซึ่งเป็นจุดเริ่มต้นของปริศนาที่ซ่อนอยู่ในใจกลางของโลก 
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 6.4/10
                    </small>
                    
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Pan's Labyrinth.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Pan's Labyrinth</CardTitle>
                  <CardText>
                  สาวน้อยโอฟีเลีย ต้องเดินทางกับคุณแม่ท้องแก่เพื่อไปอยู่กับกัปตันวิดัล 
                  นายทหารผู้คอยปราบกบฏอยู่ในเขตชนบททางตอนเหนือของประเทศสเปนตอนปี 
                  1944 หลังจากการได้รับชัยชนะของ ฟรันซิสโก ฟรังโก 
                  ภาพแห่งสงครามการต่อสู้ระหว่างนายทหารกับกลุ่มกบฏกับชีวิตความเป็นอยู่ตามแบบของลัทธิฟาสซิสต์ 
                  จึงเป็นภาพสุดโหดร้ายในสายตาของสาวน้อยโอฟีเลีย 
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 8.2/10
                    </small>
                   
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Hobbit 1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Hobbit: An Unexpected Journey</CardTitle>
                  <CardText>
                    เรื่องราวของการเดินทาง ของ บิลโบ แบ็กกิ้นส์ กับ คณะคนแคระทั้ง 13
                    ผู้ถูกเลือกให้เข้าสู่ภารกิจอันยิ่งใหญ่ในการทวงคืน
                    อาณาจักรคนแคระแห่งเอเรบอร์ที่สาปสูญหลังจาก
                    ได้รับชัยชนะจากมังกรสมอว์กมาอย่างยาวนาน
                    เขาถูกทาบทามโดยไม่รู้เรื่องโดย แกนดาล์ฟ
                    นำโดยนักรบในตำนานอย่าง ธอริน โอเคนชิลด์
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 7.8/10
                    </small>
                
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Hobbit 3.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Hobbit The Battle of the Five Armies</CardTitle>
                  <CardText>
                  ซึ่งเหล่าคณะได้ปลุกพลังอันชั่วร้ายขึ้นมาโดยไม่ตั้งใจ สมอว์ก โกรธแค้นและได้พ่นไฟทำร้ายมนุษย์ทั้งหญิงชายและเด็ก ๆ 
                  ที่ไม่มีทางสู้ในเมืองทะเลสาบด้วยความเดือดแค้น ด้วยความต้องการที่อยากจะไปทวงคืนทรัพย์สมบัติ ธอริน 
                  ยอมเสียสละมิตรภาพและเกียรติยศเพื่อใส่ร้ายว่าเป็นแผนชั่วของ บิลโบ 
                  เพื่อทำให้เขาเห็นเหตุผลที่ควรให้ฮอบบิทเดินหน้าต่อไปท่ามกลางความรุนแรงและภัยอันตราย 
                  แต่กลับมีอันตรายที่โหดร้ายกว่ารออยู่เบื้องหน้า ซึ่งไม่มีใครมองเห็นได้นอกจาก พ่อมดแกนดาล์ฟ 
                  ศัตรูผู้ยิ่งใหญ่อย่า ซอรอน ได้เคลื่อนทัพไปพร้อมกับกองทัพออร์คเพื่อแอบซุ่มโจมตีที่หุบเขาเดียวดาย
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 7.7/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Prestige.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Prestige</CardTitle>
                  <CardText>
                  เรื่องราวอันลึกลับของสองนักมายากล ในการแข่งขันอันดุเดือดที่นำพาพวกเขาไปสู่การต่อสู้ตลอดชีวิต 
                  เพื่อการเอาชนะที่เต็มไปด้วยการครอบงำ หลอกลวง และอิจฉาริษยา กับภยันตรายและมหันตภัยที่ตามมา 
                  นับตั้งแต่ที่ทั้งสองพบกันครั้งแรก เมื่อครั้งเป็นนักมายากลหนุ่มที่กำลังไต่อันดับ โรเบิร์ต แองกิเออร์ 
                  และ อัลเฟรด บอร์เดน ได้เป็นคู่แข่งกัน อย่างไรก็ดี การแข่งขันฉันท์มิตรของพวกเขาได้กลายเป็นการต่อสู้อันขมขื่น 
                  ทำให้ทั้งสองกลายเป็นศัตรูคู่อาฆาตที่หมายเอาชีวิต และในเวลาต่อมาก็ยังเป็นอันตรายต่อทุกคนๆที่อยู่รอบตัวพวกเขา 
                  ด้วยเรื่องราวที่เต็มไปด้วยการหักมุม
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 8.5/10
                    </small>
                    
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Old Boy.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Old Boy</CardTitle>
                  <CardText>
                    ชีวิตอันร้อนรุ่มที่สุมไปด้วยเพลิงแค้นของ โอแดซู ผู้ชายธรรมดาขี้เมา ซึ่งครอบครัวถูกสังหารโหด 
                    และเขายังถูกขังในคุกลับอย่างไร้เหตุผลจนถึง 15 ปี จึงได้ถูกปล่อยตัวพร้อมด้วยกระเป๋าเงินและโทรศัพท์มือถือ 
                    ซึ่งมีชายแปลกหน้าโทรแจ้งกับ แดซู ว่า ภารกิจชีวิตของเขานับแต่นี้คือ การจองล้างทวงแค้นคืนจากชายผู้กักขัง 
                    ทำลายทั้งครอบครัวและชีวิตของเขา หญิงสาวผู้ชื่อ มีโด
                    ปรากฎตัวขึ้นและสัญญาว่าจะช่วยเขาแก้แค้น ด้วยความช่วยเหลือของมิโด 
                    อดีตที่ถูกลืมไขความลับระหว่างชาย 2 คน และชายผู้นี้เป็นใคร ทำไมมันถึงเกลียด แดซู
                    เบื้องหลังนั้นความจริงคือ เรื่องสะเทือนอารมณ์ที่สังคมรับรู้แล้ว ต้องตื่นตระหนก
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 8.4/10
                    </small>
                    
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Mist.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Mist</CardTitle>
                  <CardText>
                  เรื่องราวของผู้คนในเมืองเล็ก ๆ ที่หนีตายไปอยู่ในซูเปอร์มาเก็ตแห่งหนึ่ง 
                  หลังจากที่เมืองทั้งเมืองถูกพายุหมอกมรณะครอบคลุม ในพายุหมอกนั้นมีอสุรกายแฝงตัวอยู่ 
                  และพร้อมที่จะกระชากวิญญาณของผู้ที่ผ่านเข้าไปในพายุหมอกให้หายไปพร้อมกับสายลม 
                  ความตายทำให้ทุกคนหวาดผวา ธาตุแท้แห่งการเอาชีวิตรอด เหยื่อรายต่อไปจะเป็นใคร 
                  และอสุรกายเหล่านั้นมันมาจากไหน ความดุร้ายยิ่งกว่าสิ่งที่เห็นอยู่ภายนอกทั้งหมด 
                  มันกำลังคืบคลานเข้ามาสู่ซูเปอร์มาเก็ตสถานที่ ๆ ทุกคนคิดว่าปลอดภัยที่สุด
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 7.1/10
                    </small>
                    
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Hidden.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Hidden</CardTitle>
                  <CardText>
                  เรื่องราวของครอบครัวหนึ่งที่ซ่อนตัวเองอยู่ในหลุมหลบภัย กับภัยอันตรายบางอย่าง 
                  ที่เขาไม่สามารถออกไปจากที่นี่ได้ แต่เรื่องราวกับบานปลายเมื่อมีหนูเข้ามากัดกินอาหารของเขา 
                  เจ้าหนูพาซววยดันวิ่งไปชนตะเกียง จนเป็นเหตุให้เกิดไฟลุกไหม้ 
                  ทำให้ควันไปพวยพุ่งออกไปสู่โลกภายนอกจึงมีคนมาเคาะประตูเรียก!!
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 6.4/10
                    </small>
                    
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Fight Club.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Fight Club</CardTitle>
                  <CardText>
                  ชมรมมวยที่จะปลดปล่อยผู้คนออกจากลัทธิทุนนิยม เรื่องราวของหนุ่มออฟฟิศที่ตกอยู่ในโลกของทุนนิยม 
                  ชีวิตของเขาช่างเบื่อหน่ายและเบื่อความฟูฟ่าของระบบทุนนิยมได้บังเอิญไปเจอไฟต์คลับ 
                  ชมรมต่อสู้ใต้ดินที่ทำให้เขาได้ปลดปล่อยความรู้สึกตัวเองออกมา จนในที่สุดมันได้พาเขาและเพื่อนๆ 
                  บุกฝ่าวงทำลายระบบทุนนิยมให้สิ้นซาก
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 8.8/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Wailing.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Wailing</CardTitle>
                  <CardText>
                    เหตุการณ์สุดสยองเกิดขึ้นในหมู่บ้านเล็กๆ แห่งหนึ่ง เมื่อ ชายแปลกหน้า สัญชาติญี่ปุ่น 
                    ได้เข้ามาอาศัยอยู่ที่หมู่บ้านแห่งนี้ได้ไม่นาน ได้เกิดคดีฆาตกรรมยกครอบครัวขึ้นอยู่บ่อยครั้ง รวมถึงลูกหญิงสาว 
                    ที่ติดเชื้อประหลาด จนทำให้นายตำรวจอย่าง จองกูพ่อของหญิงสาวรายนี้ต้องสืบสวนคดีสุดโหดให้ได้
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 7.5/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Boy in The Striped Pajamas.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Boy in The Striped Pajamas</CardTitle>
                  <CardText>
                    เรื่องราวในช่วงสงครามโลกครั้งที่ 2 แต่ไม่ได้โฟกัสที่สงครามแต่อย่างใด แต่กลับเป็นเด็กน้อยในครอบครัวทหาร 
                    กับบ้านที่เขาย้ายไปอยู่ที่ถูกตั้งอยู่ใกล้ค่ายกักกัน ที่มีกรงไฟฟ้ากั้นอยู่ เขาได้พบกับเด็กรุ่นเดียวกันที่จะเป็นเพื่อนเขาได้ 
                    แต่ก็กลับพบจุดจบที่คาดไม่ถึง
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 7.8/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/JoJo Rabbit.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">JoJo Rabbit</CardTitle>
                  <CardText>
                    เรื่องราวของหนุ่มน้อยชาวเยอรมันคนหนึ่งนามว่า โจโจ้ ผู้ใฝ่ฝันจะเป็นนาซีที่ดี และเขาก็มี อดอล์ฟ ฮิตเลอร์ 
                    เพื่อนในจินตนาการของเขาคอยให้ความช่วยเหลือ โลกของเขามันเปลี่ยนจากหน้ามือเป็นหลังมือเมื่อเขาได้มาพบกับเด็กสาวชาวยิว 
                    ที่แม่ของเขา พามาซ่อนตัวอยู่ในห้องใต้หลังคาบ้านของเขาในระหว่างสงครามโลก
                  </CardText>
                <CardText>

                    <small className="text-muted">
                      IMDb 7.9/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/The Sixth Sense.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">The Sixth Sense</CardTitle>
                  <CardText>
                    เรื่องราว โคล เซียร์ หนูน้อยอายุ 8 ขวบ ซึ่งไม่อาจมีชีวิตสงบสุขดั่งเช่นเด็กไร้เดียงสาวัยเดียวกันได้ 
                    สืบเนื่องมาจากถูกความลับบางอย่างที่เขาไม่กล้าเผยต่อผู้ใด ตามรังควานจิตไม่ได้หยุดหย่อน ปริศนาคลุมเครือที่ว่า 
                    คือ เขาสัมผัสกับสสารไร้ตัวตน หรือที่เรียกสั้น ๆ ว่า ผี! ในอีกภพหนึ่งได้
                  </CardText>
                <CardText>

                    <small className="text-muted">
                      IMDb 8.1/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/Shawshank.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Shawshank</CardTitle>
                  <CardText>
                  แอนดี้ ดูเฟรนส์ นายธนาคารหนุ่มที่ถูกจับในข้อหาฆาตกรรมภรรยาและชายชู้เพราะฤทธิ์ของแอลกอฮอล์ 
                  แอนดี้ไม่มั่นใจว่าเขาเป็นคนกระทำจริงหรือเปล่า แต่หลักฐานทั้งหมดชี้นำมาที่เขา 
                  เขาจึงต้องรับโทษจำคุกตลอดชีวิตในเรือนจำชอว์แชงค์
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 9.3/10
                    </small>

                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardImg top width="100%" src="/images/American History X.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">American History X</CardTitle>
                  <CardText>
                    เรื่องราว แดนนี่ วินยาร์ด เด็กหนุ่มผู้บูชาพี่ชายคนโต ดีเรค เป็นอย่างมาก ด้วยความตั้งใจที่จะแก้แค้นแทนบิดาที่ถูกฆ่าตายอย่างทารุณ 
                    ดีเรคพบว่าตนเองหลงใหลในปรัญญาแห่งความเกลียดชัง ซึ่งต่อมานำเขาไปสู่ผู้นำคนผิวขาวหัวรุนแรงในท้องถิ่น และเป็นเพราะความรุนแรงนี่เอง 
                    ที่ทำให้เขาต้องไปชดใช้กรรมในคุก
                  </CardText>
                  <CardText>

                    <small className="text-muted">
                      IMDb 8.5/10
                    </small>
                      
                      <Row xs="2">
                        <Button outline color="danger" >ดู</Button>
                        <Button outline color="warning">รีวิว</Button>
                      </Row>

              </CardText>
            </CardBody>
          </Card>
        </Col>

      </Row>

      <ButtonGroup>
        <Button>1</Button>
                <Button>2</Button>
                  <Button>3</Button>
                    <Button>4</Button>
                      <Button>5</Button>
                        <Button>6</Button>
                          <Button>7</Button>
                            <Button>8</Button>
                              <Button>9</Button>
                                <Button>10</Button>
                              <Button>11</Button>
                            <Button>12</Button>
                          <Button>13</Button>
                        <Button>14</Button>
                          <Button>15</Button>
                            <Button>16</Button>
                              <Button>17</Button>
                                <Button>18</Button>
                                  <Button>19</Button>
                                    <Button>20</Button>
                                      <Button>21</Button>
                                        <Button>22</Button>
                                          <Button>23</Button>
                                            <Button>24</Button>
                                        <Button>25</Button>
                                      <Button>26</Button>
                                  <Button>27</Button>
                              <Button>28</Button>
                          <Button>29</Button>
                      <Button>30</Button>    
                  <Button>31</Button>
              <Button>32</Button>
            <Button>33</Button>
        </ButtonGroup>
      

    </Container>

  );
}

export default Rows;
