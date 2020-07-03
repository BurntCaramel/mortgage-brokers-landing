import { MortgageBrokerReview } from '../reviews.service';

export function buildReview(id: number): MortgageBrokerReview {
  return {
    ReviewUrl: `/review/${id}`,
    Title: `Review ${id} title`,
    Description: `Review ${id} description`,
    IsRecommended: true,
    ReviewedOn: '2020-06-24T11:59:11.8903895+10:00',
    ReviewerName: `Reviewer ${id}`,
    ReviewerType: 'New Purchase',
    Status: 'Approved',
    PropertyCoverImage:
      'https://maps.googleapis.com/maps/api/streetview?key=AIzaSyCxprpHrrcZ1_Dlx_sCmUS9yaEhSeRzj2w&source=outdoor&size=530x400&location=-37.84976,145.0012&signature=89813Ze2975aMaSMshZWn5EFZag=',
    StreetAddress: `${id} Mackay Street`,
    Suburb: 'Prahran',
    State: 'Victoria',
    Postcode: '3181',
    SuburbUrl: '/real-estate-profile/sales/Victoria/agents',
    Coords: {
      Lat: -37,
      Lon: 145,
    },
    ResultPrice: 1093000.0,
    ResultDate: '2016-05-22T14:00:00+00:00',
    StarRatings: {
      OverallStarRating: 5,
    },
  };
}
