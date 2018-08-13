import { Component, OnInit } from '@angular/core';
import { ContentfulClientApi, createClient } from 'contentful';

const config = {
  space: 'jb0nxwk7gosa',
  accessToken: '4c21501bc54bb4d11773aa9a32e0c62f1fdddc4eb44493793ecdee024dfeae03'
};

const contentfulClientApi: ContentfulClientApi = createClient(config);

@Component({
	selector: 'app-home',
	template: `<pre style="padding:10px;height:700px;width:70%;background-color:#34495E;color:white;overflow:auto;">{{message}}</pre>`
})
export class HomeComponent implements OnInit {
	public message = 'PENDING...';

	constructor() {}

	ngOnInit(): void {
		const promise = contentfulClientApi.getEntries().then(entries => {
      this.message = JSON.stringify(entries, null, 4);
    });
	}
}
