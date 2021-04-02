import InputDiscount from 'csssr-school-input-discount'

import logRenderComponent from '../../hocs/logRenderComponent';
import withInputNumberValidation from '../../hocs/withInputNumberValidation';

export default withInputNumberValidation(logRenderComponent(InputDiscount));